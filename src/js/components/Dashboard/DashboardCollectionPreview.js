var $ = require('jquery');
var Backbone = require('backbone');
var DashAlbumView = require('./DashAlbumView');
var UserAlbumCollection = require('../Album/UserAlbumCollection')

var DashboardCollectionPreview = Backbone.View.extend({

	className: 'dashCollection',

	initialize: function () {
		this.listenTo(this.collection, 'reset update', this.render);
	},

	render: function () {

		var _this = this;
		
		this.$el.html(this.template());

		var previews = this.collection.slice(0, 6).map(function (model) {
			return new DashAlbumView({ model: model });
		});

		previews.forEach(function (view) {
			view.render();
			_this.$('.previews').append(view.$el);
		});
	},

	template: function (data) {
		return `
			<div></div>
			<div class="previews"></div>
		`; 
	}
})

module.exports = DashboardCollectionPreview;