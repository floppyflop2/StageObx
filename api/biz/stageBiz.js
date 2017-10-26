/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var model = require('user.js')

module.exports = {

  attributes: {

  }

};


module.exports = function getUser(id){
  var user = model.getUser(id) ; 
  return user;
}

module.exports = function getUsers(){
  var users = model.getUsers; 
  return ;
}

module.exports = function add(){
  var adding = model.add();
  //ok code ?  
  return ;
}