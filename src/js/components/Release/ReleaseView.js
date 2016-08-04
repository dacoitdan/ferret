var $ = require('jquery');
var Backbone = require('backbone');
var auth = require('../Auth/authController');

var ReleaseView = Backbone.View.extend({

	className: 'releasedetails',

	events: {
		'click .likealbum': 'like',
	},

	initialize: function () {
		this.user = auth.userModel;
		this.listenTo(this.model, 'sync', this.render.bind(this));
	},

	like: function(){
		var _this = this;
		this.user.albums.create({
			albumId: _this.model.get('id')
		});
	},

	render : function () {
		var _this = this;
		this.thumbnail = this.model.get('thumb');
		this.artist = '';
		var artists = this.model.get('artists');
		if(artists){
			this.artist = artists[0].name;
		}
		this.album = this.model.get('title');
		this.released = this.model.get('released');

		var genres = this.model.get('genres');
		var genre = '';
		if(genres){
			genre = genres[0];
			for(var i = 1; i < genres.length; i++){
				if(genres[i] === 'Folk, World, & Country'){
					genre = genre + ', ' + 'Folk'
				} else {
					genre = genre + ', ' + genres[i];
				}
			}
		}

		var styles = this.model.get('styles');
		var style = ''
		if(styles){
			var style = styles[0];
			for(var i = 1; i < styles.length; i++){
				style = style + ', ' + styles[i];
			}
		}

		this.$el.html(this.template({
			thumbnail: _this.thumbnail || '',
			artist: _this.artist || '',
			album: _this.album || '',
			genre: genre || '',
			style: style || '',
			year: _this.released || ''
		}));
	},

	template: function (data) {
		return `
			<img src="${data.thumbnail}" class="result-image">
			<div>Artist: ${data.artist}</div>
			<div>Album: ${data.album}</div>
			<div>Genre: ${data.genre}</div>
			<div>Style: ${data.style}</div>
			<div>Year: ${data.year}</div>
			<button class="likealbum">Like</button>
		`; 
	},
})

module.exports = ReleaseView;

		