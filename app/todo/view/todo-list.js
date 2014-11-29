/**
 * TodoList view
 */
define(function(require){
	var Backbone = require('backbone'),
		TodoView = require('app/todo/view/todo');

	var TodoListView = Backbone.View.extend({
		// View constructor
		initialize: function() {
			// Listen the collection's add event trigger
			// Then render new todo object to the view
			this.listenTo(this.collection, 'add', this.addOne);
		},

		// Render the todo list view
		render: function() {
			var _this = this;

			this.collection.each(function(todo){
				_this.addOne(todo);
			});
		},

		/**
		 * Render each todo item
		 * @param {TodoModel} todo
		 */
		addOne: function(todo) {
			var todoView = new TodoView({model: todo});

			this.$el.find('li:last').before(todoView.render().$el.fadeIn());
		}
	});

	return TodoListView;
});