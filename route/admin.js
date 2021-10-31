
const express = require('express');
//create a router for admin page
const admin = express.Router();


//render the page
admin.get('/login', require('./admin/loginPage.js'));

//login feature  
admin.post('/login', require('./admin/login.js'));

//create user list router
admin.get('/user', require('./admin/userPage.js'));

admin.get('/user-edit', require('./admin/user-edit.js'));

//
admin.post('/user-edit', require('./admin/user-edit-fn.js'));

admin.post('/user-modify', require('./admin/user-modify.js'));

//delete user
admin.get('/delete', require('./admin/user-delete.js'));

//articles list (request come from the url)
admin.get('/article', require('./admin/article.js'));

//article modify
admin.get('/article-edit', require('./admin/article-edit.js'));

//article adding
admin.post('/article-add', require('./admin/article-add.js'));

module.exports = admin;