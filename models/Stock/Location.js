const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const Location = new keystone.List('Location', {
	map: { name: 'locationname' },
	autokey: {
		from: 'locationname',
		path: 'slug',
		unique: true,
	},
	track: true,
});

//  Tutor.defaultColumns

Location.add({
	locationname: {
		type: String,
		noedit: true,
		label: '存货位置 (Stock Location Name)',
	},
	description: { type: Types.Html, wysiwyg: true, height: 400 },
});

Location.relationship({
	ref: 'Storage',
	refPath: 'locationId',
	path: 'storage',
});

Location.register();
