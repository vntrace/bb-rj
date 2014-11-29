/**
 * @class Main App View
 */
define(function(require){
	var Backbone = require('backbone'), // Require Backbone
		TodoCollection = require('app/todo/collection/todo'), // Require TodoCollection
		TodoListView = require('app/todo/view/todo-list'); // Require TodoListView

	var AppView = Backbone.View.extend({
		// Initialized the app view
		initialize: function() {
			// The input element
			this.input = this.$el.find('#btn-add');

			// Initialize the todo collection
			this.collection = new TodoCollection([
				{todo: "Task 1"},
				{todo: "Task 2"}
			]);
		},

		// Render main app view
		render: function() {
			var todoListView = new TodoListView({el: "#todo-list", collection: this.collection});
				todoListView.render(); // call render list view

			return this;
		},

		// View's event handler
		events: {
			"keypress #btn-add": function(e) {
				if (e.which !== 13 || !this.input.val().trim()) {
					return;
				}

				this.collection.add({todo: this.input.val()});
				this.input.val('');
			}
		}
	});


	return AppView;
});