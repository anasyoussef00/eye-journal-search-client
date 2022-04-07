<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const card_accp = ref('');
const start_date = ref('');
const end_date = ref('');

const searchAgent = () => {
	const startDateVl = start_date.value;
	const endDateVl = end_date.value;
	const cardAccpVl = card_accp.value;

	// return console.log(startDateVl);

	store.dispatch('ACTUAL_DATE', {
		startDateVl,
		endDateVl,
		cardAccpVl
	});

	// console.log(data);
}
</script>

<template>
	<div class="p-2">
		<h4>Search</h4>
		<form @submit.prevent="searchAgent" method="GET" class="">
			<!-- <div class="mb-3">
				<label class="form-label" for="card-acceptor">Card acceptor term ID</label>
				<input v-model="card_accp" class="form-control" type="text" placeholder="e.g. 7">
			</div> -->
			<div class="mb-3">
				<label class="form-label" for="region">Region</label>
				<select class="form-select" name="region" id="region">
					<option value="" selected disabled>Please select your region</option>
					<option value="casablanca">Casablanca</option>
					<option value="rabat-sale-kenitra">Rabat-Sale-Kenitra</option>
				</select>
			</div>
			<div class="mb-3">
				<label class="form-label" for="terminal">Terminal</label>
				<select class="form-select" name="terminal" id="terminal">
					<option value="" selected disabled>Please select a terminal</option>
				</select>
			</div>
			<div class="mb-3">
				<label class="form-label" for="start-date">Start date</label>
				<input v-model="start_date" class="form-control" type="date" name="start-date" id="start-date">
			</div>
			<div>
				<label class="form-label" for="end-date">End date</label>
				<input v-model="end_date" class="form-control" type="date" name="end-date" id="end-date">
			</div>
			<!-- <div class="d-flex justify-content-around">
				<button class="btn btn-success" type="submit">Search</button>
				<button class="btn btn-outline-secondary" type="button">Print</button>
			</div> -->
			<div class="row p-3">
				<button class="btn btn-success mb-2" type="submit">Search</button>
				<button class="btn btn-outline-secondary" type="button">Print</button>
			</div>
		</form>
	</div>
</template>