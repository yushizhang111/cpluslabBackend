const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Item Model
 * =============
 */

const Item = new keystone.List('Item', {
	autokey: {
		from: 'name',
		path: 'slug',
		unique: true,
		sortable: true,
	},
});

//  Item.defaultColumns

Item.add({
	name: { type: String, required: true },
	chName: { type: String, label: '中文名' },
	type: { type: Types.Relationship, ref: 'Type' },
	Image: { type: Types.CloudinaryImage, autoCleanup: true, select: true },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	size: { type: String, many: true },
	colour: { type: String, many: true },
	pattern: { type: String, many: true },
	Video: { type: String },
});

Item.relationship({ ref: 'Merchandise', refPath: 'item', path: 'merchandise' });

Item.register();
