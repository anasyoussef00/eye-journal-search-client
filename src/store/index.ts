import {createStore} from 'vuex';
import Api from '@/api/Api';

import agents from '@/store/modules/agents';

export default createStore({
  state: {
    // card_acceptor_term_id: '',
    // reference_number: '',
    // transaction_amount: '',
    // transaction_local_date: ''
    agents: []
  },
  getters: {
    AGENTS (state: any) {
      return state.agents;
    }
  },
  mutations: {
    // SET_CARD_ACCEPTOR_TERM_ID (state: any, card_id: number) {
    //   return state.card_acceptor_term_id = card_id;
    // },

    // SET_REFERENCE_NUMBER (state: any, reference_number: number) {
    //   return state.reference_number = reference_number;
    // },

    // SET_TRANSACTION_AMOUNT (state: any, transaction_amount: number) {
    //   return state.transaction_amount = transaction_amount;
    // },

    // SET_TRANSACTION_LOCAL_DATE (state: any, transaction_local_date: Date) {
    //   return state.transaction_local_date = transaction_local_date;
    // }
    SET_AGENTS (state: any, agents: object[]) {
      return state.agents = agents;
    }
  },
  actions: {
    async SEARCH ({commit}: any) {
      try {
        const {data} = await Api.get('search');
        const agents = data.agent;
        // console.log(agents);
        // commit('SET_CARD_ACCEPTOR_TERM_ID', agent.)
        commit('SET_AGENTS', agents);
        // agents.forEach((agent: any) => {
        //   console.log(agent);
        //   commit('SET_CARD_ACCEPTOR_TERM_ID', agent.card_acceptor_term_id);
        //   commit('SET_REFERENCE_NUMBER', agent.reference_number);
        //   commit('SET_TRANSACTION_AMOUNT', agent.transaction_amount);
        //   commit('SET_TRANSACTION_LOCAL_DATE', agent.transaction_local_date);
        // });
      } catch(err: any) {
        console.error(err);
      }
    },

    async ACTUAL_DATE ({commit}: any, obj: any) {
      try {
        console.log(obj);
        const {data} = await Api.get(`actualDate/${obj.start_date}/${obj.end_date}/${parseInt(obj.card_accp)}`);
        const agents = data.ag;
        // console.log(agents);
        commit('SET_AGENTS', agents);
        // agents.forEach((agent: any) => {
        //   console.log(agent);
        //   commit('SET_CARD_ACCEPTOR_TERM_ID', agent.card_acceptor_term_id);
        //   commit('SET_REFERENCE_NUMBER', agent.reference_number);
        //   commit('SET_TRANSACTION_AMOUNT', agent.transaction_amount);
        //   commit('SET_TRANSACTION_LOCAL_DATE', agent.transaction_local_date);
        // });
        console.log(data);
      } catch(err: any) {
        console.error(err);
      }
    }
  },
  modules: {
    agents
  }
});