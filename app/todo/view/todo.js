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
	});

	return TodoView;
});