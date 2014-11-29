// _.templateSettings = {
//     interpolate : /\{\{(.+?)\}\}/g,
//     evaluate: /\[\[(.+?)\]\]/g
// };

/**
 * Todo View
 * @return {Backbone.View} [description]
 */
define(function(require){
	var Backbone = require('backbone');
	
	var TodoView = Backbone.View.extend({
		// View tag name
		tagName: 'li',
		// View constructor
		initialize: function() {
			this.template = [
				'<input type="checkbox">',
				'<input type="text" value="<%= todo %>" placeholder="Write your todo here">',
				'<a href="#" class="delete" title="Delete">✖</a>'
			].join('');
		},
		// Render the todo item
		render: function(){
			this.$el.html(_.template(this.template)(this.model.toJSON()));

			return this;
		},

		events: {
			'click .delete': function(e) {
				this.remove();
			},
			'click input[type=checkbox]': function(e) {
				// Task has completed ?
				var isComplete = $(e.target).is(':checked');
				// Update the model
				this.model.set('complete', isComplete);
				// Update view state
				this.$el.toggleClass('done', isComplete);
			}
		}
	});

	return TodoView;
});