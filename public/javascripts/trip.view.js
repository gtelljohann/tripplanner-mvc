var TripView = Backbone.View.extend({
	el:"#trip",
	events: {
		'click #add-day':'addDay'
	},
	initialize: function() {
		this.model = new Trip();
		this.listenTo(temp_days, 'add', this.createDayBtn, this);
	},
	addDay: function() {
		temp_days.add({});
	},
	createDayBtn: function() {
		var view = new DayButtonView({model:Day}).render();
		this.$el.find('#day-btn-container').append(view.$el);
	}
});