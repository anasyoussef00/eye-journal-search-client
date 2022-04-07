<script lang="ts" setup>
import {reactive, onMounted, computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

// const agentsStore = reactive({

// });


// onMounted(() => {

// });

const agents = computed(() => store.getters.AGENTS);

// console.log(agents.value);
</script>

<template>
	<div class="container">
		<div class="p-2">
			<table class="table table-bordered">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">card_acceptor_term_id</th>
			      <th scope="col">reference_number</th>
			      <th scope="col">transaction_amount</th>
			      <th scope="col">transaction_local_date</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="(agent, index) in agents" :key="index">
			      <th scope="row">{{agent.id}}</th>
			      <td>{{agent.card_acceptor_term_id}}</td>
			      <td>{{agent.reference_number}}</td>
			      <td>{{agent.transaction_amount}}</td>
			      <td>{{agent.transaction_local_date}}</td>
			    </tr>
			  </tbody>
			</table>
		</div>
	</div>
</template>