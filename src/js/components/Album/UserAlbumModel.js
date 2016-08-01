var Backbone = require('backbone');

var AlbumModel = require('./AlbumModel');

var UserAlbumModel = Backbone.Model.extend({

	initialize: function () {
		this.discogsAlbum = new AlbumModel({ id: this.get('albumId') });
		this.discogsAlbum.fetch();
	}

});

module.exports = UserAlbumModel;
