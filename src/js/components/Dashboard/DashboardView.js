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
            <h3>${data.username}'s Library</h3>
            <div class="collection"></div>
            <h3>Dig for more</h3>
            <div class="rec-region"></div>
        `;
    },

});