var Backbone = require('backbone');
var DashboardCollectionPreview = require('./DashboardCollectionPreview')
var DashAlbumView = require('./DashAlbumView');
var RecView = require('./RecView');
var auth = require('../Auth/authController');

module.exports = Backbone.View.extend({

    className: 'dashboard',

    initialize: function (options) {
        this.user = auth.userModel;
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

        this.rec = new RecView({
            collection: _this.user.albums
        });
        this.rec.render();
        this.$('.rec-region').append(this.rec.$el);
    },

    template: function (data) {
        return `
            <h3>Dashboard</h3>
            <div>Welcome, ${data.username}.</div>
            <div>Your Collection:</div>
            <div class="collection"></div>
            <div>Recommendations!</div>
            <div class="rec-region"></div>
            <a href="#/logout">Logout</a>
        `;
    },

});