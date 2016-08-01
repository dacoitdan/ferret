var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    tagName: 'main',

    className: 'app',

    initialize: function () {
        this.pageView = null;
    },

    render: function () {
        this.$el.html(this.template());
    },

    template: function () {
        return `<nav>
            <button class="searchnavbutton" onclick="location.href='#/search';">Search</button>
            <button class="dashnavbutton" onclick="location.href='/';">Profile</button>
        </nav>`;
    },

    goToSearch: function () {
        this.li
    }
});