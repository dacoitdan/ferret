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
            <button class="searchnavbutton" onclick="location.href='#/search';">Explore</button>
            <button class="dashnavbutton" onclick="location.href='/';">Profile</button>
            <button class="logoutbutton" onclick="location.href='#/logout';">Log Out</button>
        `;
    },

});