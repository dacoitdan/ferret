var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    tagName: 'nav',

    initialize: function () {
        this.pageView = null;
    },

    render: function () {
        this.$el.html(this.template());
    },

    template: function () {
        return `
            <a class="searchnavbutton" href="#/search">Explore</a>
            <a class="dashnavbutton" href="#/">Profile</a>
            <a class="logoutbutton" href="#/logout">Log Out</a>
        `;
    },

});