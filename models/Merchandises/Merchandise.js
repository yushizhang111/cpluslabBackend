const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const Merchandise = new keystone.List('Merchandise', {
	autokey: {
		from: 'name',
		path: 'slug',
		unique: true,
		sortable: true,
	},
});

//  Tutor.defaultColumns

Merchandise.add({
	name: { type: String, required: true },
	chName: { type: String, label: '中文名' },
	item: { type: Types.Relationship, ref: 'Item' },
	store: { type: Types.Relationship, ref: 'Store' },
	merchandiseURL: { type: String },
	batch: { type: String },
	color: { type: String },
	size: { type: String },
	pattern: { type: String },
	Image: { type: Types.CloudinaryImage, autoCleanup: true, select: true },
	Gallery: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		many: true,
	},
	description: { type: Types.Html, wysiwyg: true, height: 400 },
});

Merchandise.relationship({
	ref: 'IncomingStock',
	refPath: 'merchandise',
	path: 'incomingstock',
});

Merchandise.register();
