var $ = require('jquery');
var Backbone = require('backbone');

var ReleaseView = Backbone.View.extend({

	className: 'releasedetails',

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render.bind(this));
	},

	render : function () {
		var _this = this;
		this.thumbnail = this.model.get('thumb');
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

module.exports = ReleaseView;