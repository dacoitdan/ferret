var Backbone = require('backbone');
var DashboardView = require('./DashboardView');

var app = require('../App/appController');
var auth = require('../Auth/authController');
var SearchView = require('../Search/SearchView');

var dashboardController = {

    showDashboard: function () {
        var dashboardView = new DashboardView({
            user: auth.userModel
        });
        app.showPage(dashboardView);
    },

	showSearch: function () {
		var searchView = new SearchView({
            user: auth.userModel
        });
		app.showPage(searchView);
	}

};

module.exports = dashboardController;