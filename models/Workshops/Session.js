const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const Session = new keystone.List('Session', {
	map: { name: 'sId' },
	autokey: {
		from: 'sId',
		path: 'slug',
		unique: true,
	},
	track: true,
});

//  Tutor.defaultColumns

Session.add({
	sId: { type: String, noedit: true, label: '学期ID (Session ID)' },
	wId: {
		type: Types.Relationship,
		ref: 'Workshop',
		label: '工作坊ID (Workshop ID)',
	},
	starttime: { type: Date, label: '起始时间 (Start Time)' },
	endtime: { type: Date, label: '结束时间 (End Time)' },
	ticketstart: { type: Types.Date, label: '售票起始时间 (Ticket Start Time)' },
	ticketend: { type: Types.Date, label: '售票终止时间 (Ticket End Time)' },
	price: { type: Number, label: '价格Price (AUD)' },
	place: { type: String, label: '地点 (Place)' },
	URL: { type: String },
	name: { type: String, label: "讲师姓名 (Tutor's name)" },
	date: { type: Types.Date, label: '上课日期 (Session Date)' },
});

function generateID () {
	const date = Date.now().toString();
	console.log(date);
	return 'SE' + date.slice(-6);
}

Session.schema.pre('save', function (next) {
	this.sId = generateID();
	console.log(this.sId);
	next();
});

Session.register();
