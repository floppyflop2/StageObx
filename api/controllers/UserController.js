/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var biz = require('stageBiz.js');

module.exports = function(){
	var router = require('routes-js').create();
    
    //home ?. 
    router.route('/', function(req) {
     console.log('home page');
     document.body.innerHTML = '<h1>Home</h1><a href="/users">Users</a>';
    });
    
    //getALL
    router.route('/users', function(req, resp) {
     console.log('users page');
     var result = biz.getUsers();
     resp.body = result;
      
    });
    
    //get 
    router.route('/users/:userId', function(req, resp) {
        console.log('a user page');
        var result = biz.getUser(id);
          resp.body = result;
    });
    
    //add 
    router.route('/addForm', function(req,resp){
       console.log('add form '); 
       var result = biz.add('...');
       resp.body = result;
    });
};

