const keystone = require('keystone');

/**
 * Store Model
 * =============
 */

const Store = new keystone.List('Store', {
	autokey: {
		from: 'name', path: 'slug', unique: true, sortable: true,
	},
});

//  Store.defaultColumns

Store.add({
	name: { type: String, required: true },
	storeURL: { type: String },
});

// City.relationship({ ref: 'Tutor', refPath: 'city', path: 'tutor' });
// City.relationship({ ref: 'University', refPath: 'location', path: 'university' });
// City.relationship({ ref: 'Job', refPath: 'city', path: 'job' });
// City.relationship({ ref: 'Order', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Training', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Meetup', refPath: 'city', path: 'meetup' });

Store.register();
