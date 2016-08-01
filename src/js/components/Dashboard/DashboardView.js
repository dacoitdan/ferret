var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    initialize: function (options) {
        this.user = options.user;
        this.listenTo(this.user, 'change', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.user.toJSON()));
    },

    template: function (data) {
        return `
            <h3>Dashboard</h3>
            Welcome, ${data.username}.
            <a href="#/logout">Logout</a>
        `;
    },

});