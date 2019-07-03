const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const Workshop = new keystone.List('Workshop', {
	map: { name: 'wId' },
	autokey: {
		from: 'wId',
		path: 'slug',
		unique: true,
	},
	track: true,
});

//  Tutor.defaultColumns

Workshop.add({
	wId: { type: String, noedit: true, label: '工作坊ID (Workshop ID)' },
	name: { type: String, label: "工作坊名称 (Workshop's name)" },
	type: { type: String, label: "工作坊类型 (Workshop's type)" },
	brief: {
		type: Types.Html,
		wysiwyg: true,
		height: 100,
		label: '工作坊简介 (Brief)',
	},
	commonprice: { type: Number, label: '通常价格Common Price (AUD)' },
	commonplace: { type: String, label: '通常地点 (Common Place)' },
	Image: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		label: '图片 (Image)',
	},
	destription: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
		label: '工作坊描述 (Description)',
	},
	Backgroundimage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		label: '背景图片 (Background Image)',
	},
});

function generateID () {
	const date = Date.now().toString();
	console.log(date);
	return 'WS' + date.slice(-6);
}

Workshop.schema.pre('save', function (next) {
	this.wId = generateID();
	console.log(this.wId);
	next();
});

Workshop.relationship({
	ref: 'Session',
	refPath: 'wId',
	path: 'session',
});

Workshop.register();
