var $ = require('jquery');
var Backbone = require('backbone');
var AlbumModel = require('../Album/AlbumModel');

var ResultView = Backbone.View.extend({

	initialize: function(){
		this.searchView = null;
	},

	events: {
		'click .result': 'handleClick'
	},

	render : function () {
		var _this = this;
		this.thumbnail = this.model.get('thumb');
		this.$el.html(this.template({
			thumbnail: _this.thumbnail
		}));
	},

	template: function (data) {
		return `
			<img src="${data.thumbnail}" class="result">
		`; 
	},

	handleClick: function(){
		var _this = this;
		this.searchView.like(_this.model);
	}
})

module.exports = ResultView;