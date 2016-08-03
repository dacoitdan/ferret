var $ = require('jquery');
var Backbone = require('backbone');

var RecAlbumView = Backbone.View.extend({

	className: 'recommendation',

	initialize: function () {
		this.model.on('sync', this.render.bind(this));
	},

	render : function () {
		var _this = this;
		this.thumbnail = this.model.get('thumb');
		this.$el.html(this.template({
			thumbnail: _this.thumbnail || '',
			id: _this.model.get('id') || ''
		}));
	},

	template: function (data) {
		return `
			<a href = "#/release/${data.id}"><img src="${data.thumbnail}" class="result-image"></a>
		`; 
	},
})

module.exports = RecAlbumView;