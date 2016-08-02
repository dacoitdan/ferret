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
			thumbnail: _this.thumbnail || '',
			id: _this.model.get('albumId') || ''
		}));
	},

	template: function (data) {
		return `
			<a href = "#/release/${data.id}"><img src="${data.thumbnail}" class="result-image"></a>
		`; 
	},
})

module.exports = DashAlbumView;