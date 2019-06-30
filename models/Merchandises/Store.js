const keystone = require('keystone');

/**
 * Store Model
 * =============
 */

const Store = new keystone.List('Store', {
	autokey: {
		from: 'name',
		path: 'slug',
		unique: true,
		sortable: true,
	},
});

//  Store.defaultColumns

Store.add({
	name: { type: String, required: true },
	storeURL: { type: String },
});

Store.relationship({
	ref: 'Merchandise',
	refPath: 'store',
	path: 'merchandise',
});

Store.register();
