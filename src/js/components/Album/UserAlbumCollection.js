var Backbone = require('backbone');

var UserAlbumModel = require('./UserAlbumModel');

var UserAlbumCollection = Backbone.Collection.extend({
	model: UserAlbumModel,

	initialize: function (models, options) {
		this.url = options.url;
	}
});

module.exports = UserAlbumCollection;
