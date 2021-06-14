export default {
	state: {
		shopList: [
			{
				id: 1,
				title: 'Nike Red',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
				img: require('../assets/img/1.png')
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		getShopList (state) {
			return state.shopList
		},
		getProduct: (state) => (id) => {
			return state.shopList.find(product => product.id == id)
		}
	},
}