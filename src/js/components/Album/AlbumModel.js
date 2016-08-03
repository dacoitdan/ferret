var Backbone = require('backbone');

var api = require('../API/api');

var cache = localStorage.albums
	? JSON.parse(localStorage.albums)
	: {};

var AlbumModel = Backbone.Model.extend({
	initialize: function(){
		var _this = this;
	},
	url: function () {
		return api.url('releases/' + this.get('id')); 
	},
	// fetch: function (options) {
	// 	var _this = this;
	// 	var cached = cache[this.get('id')];


	// 	options = options || {};

	// 	options.success = options.success || function () {};

	// 	if (cached) {
	// 		this.set(cached);
	// 		return;
	// 	}

	// 	var origSuccess = options.success;

	// 	options.success = function () {
	// 		// Update in cache
	// 		cache[_this.get('id')] = _this.toJSON();
	// 		// Update cache in localStorage
	// 		this.localStorage.albums = JSON.stringify(cache);
	// 		// Call the original success function
	// 		origSuccess.apply(_this, arguments);
	// 	};

	// 	Backbone.Model.prototype.fetch.call(this, options);
	// }
});

module.exports = AlbumModel;
