kendo.ui.GanttCustomView = kendo.ui.GanttView.extend({
	name: "custom",
	options: {
		yearHeaderTemplate: kendo.template("#=kendo.toString(start, 'yyyy')#"),
		quarterHeaderTemplate: kendo.template("# return ['Q1', 'Q2', 'Q3', 'Q4'][start.getMonth() / 3] #"),
		monthHeaderTemplate: kendo.template("#=kendo.toString(start, 'MMM')#")
	},

	range: function (range) {
		this.start = new Date("01/01/2017");
		this.end = new Date("01/01/2019");
	},

	_generateSlots: function (incrementCallback, span) {
		var slots = [];
		var slotStart = new Date(this.start);
		var slotEnd;

		while (slotStart < this.end) {
			slotEnd = new Date(slotStart);
			incrementCallback(slotEnd);
			slots.push({ start: slotStart, end: slotEnd, span: span });
			slotStart = slotEnd;
		}

		return slots;
	},

	_createSlots: function () {
		var slots = [];
		slots.push(this._generateSlots(function (date) { date.setFullYear(date.getFullYear() + 1); }, 12));
		slots.push(this._generateSlots(function (date) { date.setMonth(date.getMonth() + 3); }, 3));
		slots.push(this._generateSlots(function (date) { date.setMonth(date.getMonth() + 1); }, 1));
		return slots;
	},

	_layout: function () {
		var rows = [];
		var options = this.options;
		rows.push(this._slotHeaders(this._slots[0], kendo.template(options.yearHeaderTemplate)));
		rows.push(this._slotHeaders(this._slots[1], kendo.template(options.quarterHeaderTemplate)));
		rows.push(this._slotHeaders(this._slots[2], kendo.template(options.monthHeaderTemplate)));
		return rows;
	}
});