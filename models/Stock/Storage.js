const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const Storage = new keystone.List('Storage', {
	map: { name: 'stockId' },
	autokey: {
		from: 'stockId',
		path: 'slug',
		unique: true,
	},
	track: true,
});

//  Tutor.defaultColumns

Storage.add({
	stockId: { type: String, noedit: true, label: '存库ID (Stock ID)' },
	locationId: {
		type: Types.Relationship,
		ref: 'Location',
		label: '货架位置 （Storage Location)',
	},
	merchandise: {
		type: Types.Relationship,
		ref: 'Merchandise',
		label: '商品ID (Merchandises ID)',
	},
	amount: { type: Number, label: '数量 (Amount)' },
	storetime: { type: Date, label: '存入时间 (Storage Time)' },
	outstoragetime: { type: Date, label: '出货时间 (Outstorage Time)' },
});

function generateID () {
	const date = Date.now().toString();
	console.log(date);
	return 'STO' + date.slice(-6);
}

Storage.schema.pre('save', function (next) {
	this.stockId = generateID();
	console.log(this.stockId);
	next();
});

Storage.register();
