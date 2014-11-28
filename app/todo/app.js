define(function(require){
	var Backbone = require('backbone'),
		TodoCollection = require('app/todo/collection/todo'),
		TodoView = require('app/todo/view/todo');

	var AppView = Backbone.View.extend({
		initialize: function() {
			this.collection = new TodoCollection();
		},

		render: function() {
			return this;
		}
	});
});