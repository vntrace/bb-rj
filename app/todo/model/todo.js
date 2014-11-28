/**
 * Todo Model
 * @return {Backbone.Model}
 */
define(function(require){
	var Backbone = require('backbone');	

	/**
	 * Todo Model
	 * @type {Backbone.Model}
	 */
	var TodoModel = Backbone.Model.extend({
		defaults: {
		    todo: "",
		    complete: false,
		    date: new Date()
	  	}
	});

	return TodoModel;
});