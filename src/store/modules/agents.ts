import Api from '@/api/Api';

const agents = {
	state: {
		card_acceptor_term_id: '',
		reference_number: '',
		transaction_amount: '',
		transaction_local_date: ''
	},
	getters: {},
	mutations: {},
	actions: {
		async SEARCH ({commit}: any) {
			try {
				const {data} = await Api.get('search');
				// console.log(data);
			} catch(err: any) {
				console.error(err);
			}
		}
	}
}

export default {
	namespaced: true,
	agents
} 