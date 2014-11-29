// App main config
require.config({
	baseUrl: '',
	shim: {
		backbone: {
			deps: [
				'underscore',
				'jquery'
			]
		}
	},
	paths: {
		jquery: 'lib/jquery-1.11.1.min',
		backbone: 'lib/backbone-min',
		underscore: 'lib/underscore-min'
	}
});

// Require main app viewer
require([
	'jquery',
	'underscore',
	'backbone',
	'app/todo/app'
], function($, Backbone, _, AppView){
	// New app view instance
	var appView = new AppView({el: '#todo'});
		appView.render(); // Render your app
});