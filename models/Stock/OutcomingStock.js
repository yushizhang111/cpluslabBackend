const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const OutcomingStock = new keystone.List('OutcomingStock', {
	map: { name: 'outId' },
	autokey: {
		from: 'outId',
		path: 'slug',
		unique: true,

	},
	track: true,
});

//  Tutor.defaultColumns

OutcomingStock.add({
	outId: { type: String, noedit: true, label: '出库ID (OutID)' },
	merchandise: { type: Types.Relationship, ref: 'Merchandise', label: '商品ID (Merchandises ID)' },
	amount: { type: Number, label: '数量 (Amount)' },
	retailprice: { type: Number, label: '零售价（Retail Price)' },
	shippingaddress: { type: String, label: '寄运地址 (Shipping Address)' },
	shipping: { type: String, label: '物流公司 (Shipping Company)' },
	orderId: { type: String, label: '下单ID (Order ID)' },
	trackingId: { type: String, label: '跟踪单号 (Tracking ID)' },
	shippingprice: { type: Number, label: '运费 (Shipping price)' },
	outtime: { type: Types.Date, label: '出库时间 (Outstorage Time)' },

});

function generateID () {
	const date = Date.now().toString();
	console.log(date);
	return 'OUT' + date.slice(-6);
}

OutcomingStock.schema.pre('save', function (next) {
	this.outId = generateID();
	console.log(this.outId);
	next();
});

OutcomingStock.register();
