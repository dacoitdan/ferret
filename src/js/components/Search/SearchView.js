var $ = require('jquery');
var Backbone = require('backbone');
var SearchCollection = require('../Album/SearchCollection')
var ResultView = require('./ResultView')
var request = require('request');
var api = require('../API/api')

var SearchView = Backbone.View.extend({
		events: {
		'click .search-button': 'handleSearchClick',
		'keyup :input': 'logKey'
	},

	initialize: function(options){
		this.user = options.user;
        this.listenTo(this.user, 'change', this.render);
	},

	like: function(model) {
		// POST: /users/:userId/albums
		this.user.albums.create({
			albumId: model.get('id')
		});
	},

	render: function () {
		this.$el.html(this.template());
	},

	handleSearchClick: function () {
		var _this = this;
		this.collection = new SearchCollection();
		var parameters = {
			q: $('#query').val(),
			// per_page: 100,
			// page: 1
		}
		this.collection.fetch(
			{	
				data: parameters,
				success: (function(){
					console.log(_this.collection);
					_this.$('.search-results').empty();
					var filtered = _this.collection.filter(function(model){
						return model.get('type') !== 'artist';
					});
					console.log(filtered);
					for(var i = 0; i <= 5; i++){
						var album = filtered[i];
						if(album){
							var resultView = new ResultView({
								model: album
							});
							resultView.searchView = _this;
							resultView.render();
							_this.$('.search-results').append(resultView.el);
						}
					}
				})
		});
	},

	displaySearchResults: function (){
		this.$('.search-results').empty();
	},

	logKey: function (e) {
		var _this = this;
		var val = this.$('#query').val();
		if (e.keyCode === 13 && val.length > 0) {
			_this.handleSearchClick();
		}
	},

	template: function(){
		return `
			<div>
				<label for="query">Search</label>: <input type="text" class="search-input" id="query">
				<button class="search-button">Search</button>
			</div>
			<div class="search-results"></div>
		`
	}
});

module.exports = SearchView;