var Backbone = require('backbone');

var auth = require('./authController');

module.exports = Backbone.View.extend({

    className: 'register',

    events: {
        'click .register-button': 'onRegisterClick'
    },

    render: function () {
        this.$el.html(this.template());
    },

    template: function () {
        return `
            <div class="ferret"></div>
            <div class="form">
                <p class="dig">dig music?</p>
                <p class="deeper">We'll help you dig deeper.</p>
                <h3>Register</h3>
                <input id="username" type="text" name="username" placeholder="Username">
                <input id="password" type="password" name="password" placeholder="Password">
                <button class="register-button">Register</button>
                <div class="already">Already digging with the ferret?</div>
                <a href="#/login" class="log-child">Login</a>
            </div>
        `;
    },

    onRegisterClick: function () {
        this.trigger('submit', {
            username: this.$('#username').val(),
            password: this.$('#password').val()
        });
    }

});