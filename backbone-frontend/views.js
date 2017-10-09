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


