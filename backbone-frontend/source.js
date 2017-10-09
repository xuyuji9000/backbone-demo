var User = Backbone.Model.extend({
  defaults: {
    id: null, 
    name: ''
  }
});

var Users = Backbone.Collection.extend({
  model: User,
  url: 'http://localhost:9001/users'
});

var users = new Users;

users.fetch();

// var AppView = Backbone.View.extend({
//   el: '#container',
//   initialize: function() {
//     this.render();
//   },
//   render: function() {
//     this.$el.empty();
//     this.$el.html("Hello World");
//   }
// });
// 
// var appView = new AppView();

var user = new User({
  id: 2,
  name: 'Karl'
});

var userView = new UserView({model: user});

$("#container").html(userView.el)
