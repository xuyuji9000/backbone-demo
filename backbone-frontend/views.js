var views = {}

views.UserView = Backbone.View.extend({
  tagName: 'li',
  my_template: _.template("<%= id %> : <%= name %>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.my_template(this.model.toJSON()));
  }
})


views.UsersView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function() {
    this.render();
  },

  render: function() {
    this.collection.each(function(item) {
      var itemView = new views.UserView({model: item});

      this.$el.append(itemView.el);
    }, this)
  },
});
