var DayButtonView = Backbone.View.extend({
	buildHTML : _.template($('#button-template').html()),
	render: function() {
		this.setElement(this.buildHTML({dayNum:temp_days.length}));
		return this;
	}
});