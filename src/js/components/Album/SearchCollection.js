var Backbone = require('backbone');
var AlbumModel = require('./AlbumModel');
var api = require('../API/api');

var $ = require('jquery');

var SearchCollection = Backbone.Collection.extend({

	model: AlbumModel,

	parse: function(response){
		return response.results;
	},

	url: function(){
		return api.url('database/search');
	},

	search: function (paramsObj) {
		var _this = this;
		this.fetch({
			data: paramsObj
		});
	}

});

module.exports = SearchCollection;