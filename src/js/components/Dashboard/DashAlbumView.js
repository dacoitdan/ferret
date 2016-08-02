var $ = require('jquery');
var Backbone = require('backbone');

var DashAlbumView = Backbone.View.extend({

	className: 'previewalbum',

	initialize: function () {
		this.model.discogsAlbum.on('sync', this.render.bind(this));
	},

	render : function () {
		var _this = this;
		this.thumbnail = this.model.discogsAlbum.get('thumb');
		this.$el.html(this.template({
			thumbnail: _this.thumbnail || ''
		}));
	},

	template: function (data) {
		return `
			<img src="${data.thumbnail}" class="result-image">
		`; 
	},
})

module.exports = DashAlbumView;