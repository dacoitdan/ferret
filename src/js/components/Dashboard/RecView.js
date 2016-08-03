var $ = require('jquery');
var Backbone = require('backbone');
var SearchCollection = require('../Album/SearchCollection');
var AlbumModel = require('../Album/AlbumModel');
var ResultView = require('../Search/ResultView');

var RecView = Backbone.View.extend({

	className: 'recommendations',

	events: {
		'click .recommend': 'recommend',
	},

	initialize: function () {
		this.results = new SearchCollection();
		this.listenTo(this.results, 'add', this.render.bind(this));
	},

	render : function () {
		var _this = this;
		this.$el.html(this.template());
		
		if (this.childViews) {
			this.childViews.forEach(function (view) {
				view.remove();
			});
		}

		this.childViews = this.results.shuffle().slice(0, 6).map(function (model) {
			return new ResultView({ model: model });
		});

		this.childViews.forEach(function (view) {
			view.render();
			_this.$('.rec-results').append(view.$el);
		});
	},

	template: function () {
		return `
			<button class="recommend">HIT ME</button>
			<div class="rec-results"></div>
		`; 
	},

	recommend: function(){

		this.results.reset();

		var count;
		var table = {};
		var _this = this;

		this.collection.each(function(model){
			var style = model.discogsAlbum.get('styles')[0];
			if(table[style]){
				table[style]++;
			} else {
				table[style] = 1;
			}
		});

		for(var prop in table){
			table[prop] /= _this.collection.length
			table[prop] *= 6
			if (table[prop] < 1) {
				table[prop] = 1;
			}
		}

		var styles = Object.keys(table);

		styles.forEach(function (style) {
			var found = 0;
			var coll = new SearchCollection();
			coll.fetch({
				data: {
					style: style,
					type: 'release',
				},
				success: function () {

					var models = coll.shuffle();

					console.log('Getting ' + table[style] + ' albums from the style ' + style);

					;(function getAlbum (model) {
						var am = new AlbumModel({ id: model.get('id') });
						am.fetch({
							success: function () {
								if (am.get('community').rating.average > 3) {
									console.log('Got one');
									_this.results.add(am);
									found++;
								}

								if (found < table[style]) {
									getAlbum(models.pop());
								}
							}
						})
					})(models.pop());
				}
			});
		});
	}

})

module.exports = RecView;

		