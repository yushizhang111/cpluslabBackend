const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Type Model
 * =============
 */

const Type = new keystone.List('Type', {
	autokey: {
		from: 'name', path: 'slug', unique: true, sortable: true,
	},
});

//  Type.defaultColumns

Type.add({
	name: { type: String, required: true },
	chName: { type: String, label: '中文名' },
	category: { type: String },
	backgroundImage: { type: Types.CloudinaryImage, autoCleanup: true, select: true },
	categoryIcon: { type: Types.CloudinaryImage, autoCleanup: true, select: true },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
});

Type.relationship({ ref: 'Item', refPath: 'name', path: 'item' });
// City.relationship({ ref: 'University', refPath: 'location', path: 'university' });
// City.relationship({ ref: 'Job', refPath: 'city', path: 'job' });
// City.relationship({ ref: 'Order', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Training', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Meetup', refPath: 'city', path: 'meetup' });

Type.register();
