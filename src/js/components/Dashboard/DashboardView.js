var Backbone = require('backbone');
var DashboardCollectionPreview = require('./DashboardCollectionPreview')
var DashAlbumView = require('./DashAlbumView');

module.exports = Backbone.View.extend({

    className: 'dashboard',

    initialize: function (options) {
        this.user = options.user;
        this.listenTo(this.user, 'change', this.render);
    },

    render: function () {
        var _this = this;
        this.$el.html(this.template(this.user.toJSON()));
        this.renderAlbums();
    },

    renderAlbums: function () {
        var _this = this;
        this.dashPreview = new DashboardCollectionPreview({
            collection: _this.user.albums
        });
        this.dashPreview.render();
        this.$('.collection').append(this.dashPreview.$el);
    },

    template: function (data) {
        return `
            <h3>Dashboard</h3>
            Welcome, ${data.username}.
            <div class="collection"></div>
            <a href="#/logout">Logout</a>
        `;
    },

});