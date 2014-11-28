/**
 * Todo Collection
 * @return {Backbone.Collection} [description]
 */
define(function(require){
	var Backbone = require('backbone'),
		TodoModel = require('app/todo/model/todo');
	
	var TodoCollection = Backbone.Collection.extend({
		model: TodoModel
	});

	return TodoCollection;
});