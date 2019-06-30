const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Merchandise Model
 * =============
 */

const IncomingStock = new keystone.List('IncomingStock', {
	map: { name: 'inId' },
	autokey: {
		from: 'inId',
		path: 'slug',
		unique: true,

	},
	track: true,
});

//  Tutor.defaultColumns

IncomingStock.add({
	inId: { type: String, noedit: true, label: '入库ID (InID)' },
	merchandise: { type: Types.Relationship, ref: 'Merchandise', label: '商品ID (Merchandises ID)' },
	source: { type: String, label: '来源 (Source)' },
	orderId: { type: String, label: '下单ID (Order ID)' },
	trackingId: { type: String, label: '跟踪单号 (Tracking ID)' },
	shipping: { type: String, label: '物流公司 (Shipping Company)' },
	status: { type: String, label: '物流状态 (Status)' },
	shippingprice: { type: Number, label: '运费 (Shipping price)' },
	amount: { type: Number, label: '数量 (Amount)' },
	purchasingcost: { type: Number, label: '买入价格PurchasingCost(AUD)' },
	intime: { type: Types.Date, label: '入库时间 (Instorage Time)' },

});

function generateID () {
	const date = Date.now().toString();
	console.log(date);
	return 'IN' + date.slice(-6);
}

IncomingStock.schema.pre('save', function (next) {

	this.inId = generateID();
	console.log(this.inId);
	next();
});
// City.relationship({ ref: 'Tutor', refPath: 'city', path: 'tutor' });
// City.relationship({ ref: 'University', refPath: 'location', path: 'university' });
// City.relationship({ ref: 'Job', refPath: 'city', path: 'job' });
// City.relationship({ ref: 'Order', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Training', refPath: 'city', path: 'order' });
// City.relationship({ ref: 'Meetup', refPath: 'city', path: 'meetup' });

IncomingStock.register();
