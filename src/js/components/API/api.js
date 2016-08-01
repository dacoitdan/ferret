module.exports = {
	
	base: 'http://api.discogs.com/',

	apiKey: 'WjiChrjgtPFlVRHJQtGrQYQPPPDAbBtwTEVrakoM',

	url: function (resource) {
		return this.base + resource + '?token=' + this.apiKey;
	}

};