var Backbone = require('backbone');

var auth = require('./authController');

module.exports = Backbone.View.extend({

    className: 'login',

    events: {
        'click .login-button': 'onLoginClick'
    },

    render: function () {
        this.$el.html(this.template());
    },

    template: function () {
        return `
            <div class="form">
                <h3>Login</h3>
                <input id="username" type="text" name="username" placeholder="Username">
                <input id="password" type="password" name="password" placeholder="Password">
                <button class="login-button">Login</button>
                <div class="already">Not digging with the ferret?</div>
                <a href="#/register" class="log-child">Register</a>
            </div>
        `;
    },

    onLoginClick: function () {
        this.trigger('submit', {
            username: this.$('#username').val(),
            password: this.$('#password').val()
        });
    }

});