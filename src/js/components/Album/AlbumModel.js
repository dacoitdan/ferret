var Backbone = require('backbone');

var api = require('../API/api');

var AlbumModel = Backbone.Model.extend({
	initialize: function(){
		var _this = this;
	},
	url: function () {
		return api.url('releases/' + this.get('id')); 
	}
});

module.exports = AlbumModel;
