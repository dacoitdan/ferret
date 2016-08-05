var $ = require('jquery');
var Backbone = require('backbone');

var app = require('../App/appController');
var LoginView = require('./LoginView');
var RegisterView = require('./RegisterView');
var UserModel = require('./UserModel');

module.exports = window.auth = {

    userModel: new UserModel(),

    check: function () {
        var _this = this;

        this.userModel.check(function success () {

        }, function error() {
            Backbone.history.navigate('register', { trigger: true });
        });
    },

    login: function (credentials) {
        $.ajax('/auth/login', {
            method: 'POST',
            data: credentials,
            success: function () {
                Backbone.history.navigate('home', { trigger: true });
            },
            error: function () {
                throw new Error('There was an error logging in.');
            }
        });
    },

    logout: function () {
        var _this = this;
        $.ajax('/auth/login', {
            method: 'DELETE',
            success: function () {
                Backbone.history.navigate('login', { trigger: true });
            },
            error: function () {
                throw new Error('There was an error logging out.');
            }
        });
    },

    register: function (options) {
        var model = new UserModel(options);

        model.save(null, {
            success: function () {
                Backbone.history.navigate('login', { trigger: true });
            }
        });
    },

    showLogin: function () {
        var _this = this;
        var loginView = new LoginView();

        app.showPage(loginView);

        loginView.on('submit', function (options) {
            _this.login(options);
        });
    },

    showRegister: function () {
        var _this = this;
        var registerView = new RegisterView();

        app.showPage(registerView);

        registerView.on('submit', function (options) {
            _this.register(options);
        });
    }

};