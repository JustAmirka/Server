export default {
	server: {
		port: 3000,
		noTokenUrl: [
			'/account/login',
			// '/',
			'/account/register',
			'/account/forget',
			'/account/verify',
			'/category',
			'/book',
			// '/book/onsale',
			// '/book/getDetails',
			'/search',
			'/category/details',
			// '/search/filter',
		],

		expTime: 60 * 60 * 24,
		secret: 'SHIZUKA',
	},

	BOOK_STATUS: {
		AVAILABLE: 1,
		OUT_OF_STOCK: 0,
		ON_SALE: 2,
	},

	ORDER_STATUS: {
		PENDING: 1,
		PREPARING: 2,
		ARRIVING: 3,
		COMPLETED: 4,
		CANCELED: 5,
	},

	ROLE: {
		CUSTOMER: 0,
		SELLER: 1,
		ADMIN: 2,
	},

	ACC_STATUS: {
		ACTIVE: 1,
		BANNED: 0,
	},

	url: 'mongodb://localhost:27017/mobilki',

}
