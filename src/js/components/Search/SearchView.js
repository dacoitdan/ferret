var $ = require('jquery');
var Backbone = require('backbone');
var SearchCollection = require('../Album/SearchCollection')
var ResultView = require('./ResultView')
var api = require('../API/api')

var SearchView = Backbone.View.extend({

	className: 'search',

	events: {
		'click .search-button': 'handleSearchClick',
		'keyup :input': 'logKey'
	},

	initialize: function(options){
		this.user = options.user;
        this.listenTo(this.user, 'change', this.render);
	},

	render: function () {
		this.$el.html(this.template());
	},

	handleSearchClick: function () {
		var _this = this;
		this.collection = new SearchCollection();
		var parameters = {
			q: $('#query').val(),
			type: 'release'
			// per_page: 100,
			// page: 1
		}
		this.collection.fetch(
			{	
				data: parameters,
				success: (function(){
					_this.$('.search-results').empty();

					for(var i = 0; i <= 11; i++){
						var album = _this.collection.at(i);
						var resultView = new ResultView({
							model: album,
							user: _this.user
						});
						resultView.searchView = _this;
						resultView.render();
						_this.$('.search-results').append(resultView.el);
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
			<h1>Search</h1>
			<div>
				<input type="text" class="search-input" id="query">
				<button class="search-button">Search</button>
			</div>
			<div class="search-results"></div>
		`
	}
});

module.exports = SearchView;