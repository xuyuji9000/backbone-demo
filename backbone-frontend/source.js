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

// var users = new Users;
// 
// users.fetch();

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

// var user = new User({
//   id: 2,
//   name: 'Karl'
// });

var users = new Users([
  {
    id: 2,
    name: 'Karl'
  },
  {
    id: 4,
    name: 'Xu'
  }
])

// var userView = new views.UserView({model: user});
var usersView = new views.UsersView({collection: users});

$("#container").html(usersView.el)
