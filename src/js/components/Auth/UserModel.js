var Backbone = require('backbone');

var UserAlbumCollection = require('../Album/UserAlbumCollection');

module.exports = Backbone.Model.extend({

    urlRoot: '/users',

    defaults: {
        username: '',
        albums: []
    },

    initialize: function () {
        var _this = this;

        this.albums = new UserAlbumCollection([], {
            url: function () {
                return '/users/' + _this.get('id') + '/albums';
            }
        });

        this.on('sync', function () {
            _this.updateAlbums(_this.get('albums'));
        });
    },

    updateAlbums: function (albums) {
        var _this = this;

        this.albums.reset(albums);

        if (!albums) {
            this.albums.fetch();
        }
    },

    check: function (success, error) {
        this.fetch({
            url: '/auth/check',
            success: success,
            error: error
        });
    }

});