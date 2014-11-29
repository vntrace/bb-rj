/**
 * Todo Collection
 * @return {Backbone.Collection} [description]
 */
define(function(require){
	var Backbone = require('backbone'),
		TodoModel = require('app/todo/model/todo');
	
	var TodoCollection = Backbone.Collection.extend({
		// Todo model class name
		model: TodoModel,

		/**
		 * Added new toto object to the collection
		 * @param {Object} todo
		 */
		addOne: function(todo) {
			// Create new todo object
			todo = new TodoModel(todo);
			// Added todo to the collection
			this.add(todo);
		}
	});

	return TodoCollection;
});