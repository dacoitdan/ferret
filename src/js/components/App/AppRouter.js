var Backbone = require('backbone');

var auth = require('../Auth/authController');
var dashboard = require('../Dashboard/dashboardController');
var release = require('../Release/releaseController');

module.exports = Backbone.Router.extend({

    routes: {
        '': 'home',
        'login': 'login',
        'logout': 'logout',
        'register': 'register',
        'home': 'home',
        'search': 'search',
        'release/:id': 'release'
    },

    login: function () {
        auth.showLogin();
    },

    logout: function () {
        auth.logout();
    },

    register: function () {
        auth.showRegister();
    },

    home: function () {
        auth.check();
        dashboard.showDashboard();
    },

    search: function(){
        auth.check()
        dashboard.showSearch();
    },

    release: function(id){
        auth.check();
        release.showRelease(id);
    }

});