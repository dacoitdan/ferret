var $ = require('jquery');
var Backbone = require('backbone');
var AlbumModel = require('../Album/AlbumModel');
var auth = require('../Auth/authController');

var ResultView = Backbone.View.extend({

	 className: 'result',

	events: {
		'click .like': 'handleClick'
	},

	initialize: function () {
		this.user = auth.userModel;
	},

	render : function () {
		var _this = this;
		this.thumbnail = this.model.get('thumb');
		this.id = this.model.get('id');
		this.$el.html(this.template({
			thumbnail: _this.thumbnail,
			id: _this.id
		}));
	},

	template: function (data) {
		return `
			<a href = "#/release/${data.id}"><img src="${data.thumbnail}" class="result-image"></a>
			<button class="like">Like</button>
		`; 
	},

	handleClick: function(){
		var _this = this;
		this.user.albums.create({
			albumId: _this.model.get('id')
		});
	}
})

module.exports = ResultView;