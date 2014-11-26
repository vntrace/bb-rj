// App main config
require.config({
	baseUrl: '',
	shim: {

	},
	paths: {
		jquery: 'lib/jquery-1.11.1.min',
		backbone: 'lib/backbone-min',
		underscore: 'lib/underscore-min'
	}
});

// Require main app viewer
require(['jquery']);