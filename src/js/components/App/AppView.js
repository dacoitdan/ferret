var Backbone = require('backbone');
var NavView = require('./NavView');

module.exports = Backbone.View.extend({

    tagName: 'main',

    className: 'app',

    initialize: function () {
        this.pageView = null;
        this.nav = new NavView();
        this.nav.render();
    },

    render: function () {
        this.$el.html(this.template());
        this.$('.nav-region').append(this.nav.$el);
    },

    template: function () {
        return `
            <div class="nav-region"></div>
            <div class="page-region"></div>
        `;
    },

    show: function (view) {
        if (this.pageView) {
            this.pageView.remove();
        }
        
        this.pageView = view;

        view.render();
        
        this.$('.page-region').append(view.el);
    }

});