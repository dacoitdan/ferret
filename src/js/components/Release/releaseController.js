var app = require('../App/appController');
var AlbumModel = require('../Album/AlbumModel');
var auth = require('../Auth/authController');
var ReleaseView = require('./ReleaseView');

module.exports = {

	showRelease: function (id) {
		var release = new AlbumModel({ id: id });
		var view = new ReleaseView({ 
			model: release,
			user: auth.userModel
		});
		app.showPage(view);
		release.fetch();
	}
	
};