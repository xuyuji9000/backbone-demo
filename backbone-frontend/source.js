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

// var userView = new views.UserView({model: user});
var usersView = new views.UsersView();

$("#container").html(usersView.el)
