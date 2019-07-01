const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const News = new keystone.List('News', {
	map: { name: 'nId' },
	autokey: {
		from: 'nId',
		path: 'slug',
		unique: true,
	},
	track: true,
});

//  Tutor.defaultColumns

News.add({
	nId: { type: String, noedit: true, label: '新闻ID (News ID)' },
	newstitle: { type: String, label: '新闻标题 (News Title)' },
	author: { type: String, label: '作者 (Author)' },
	date: { type: Types.Date, label: '日期 (Date)' },
	Image: { type: Types.CloudinaryImage, autoCleanup: true, select: true },
	URL: { type: String },
	brief: {
		type: Types.Html,
		wysiwyg: true,
		height: 100,
		label: '新闻简介 (Brief)',
	},
	description: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
		label: '新闻描述 (Description)',
	},
	Gallery: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		many: true,
	},
});

function generateID () {
	const date = Date.now().toString();
	console.log(date);
	return 'NEWS' + date.slice(-6);
}

News.schema.pre('save', function (next) {
	this.nId = generateID();
	console.log(this.nId);
	next();
});

News.register();
