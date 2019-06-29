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
	type: { type: String, ref: 'Type' },
	Image: { type: Types.CloudinaryImage, autoCleanup: true, select: true },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	size: { type: String, many: true },
	colour: { type: String, many: true },
	pattern: { type: String, many: true },
	Video: { type: String },
});

// City.relationship({ ref: 'Tutor', refPath: 'city', path: 'tutor' });
// City.relationship({ ref: 'University', refPath: 'location', path: 'university' });
// City.relationship({ ref: 'Job', refPath: 'city', path: 'job' });
// City.relationship({ ref: 'Order', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Training', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Meetup', refPath: 'city', path: 'meetup' });

Item.register();
