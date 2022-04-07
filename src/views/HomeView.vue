<script lang="ts" setup>
import SearchForm from '@/components/SearchForm.vue';
import DataTable from '@/components/DataTable.vue';
</script>

<template>
  <div class="row">
    <section class="col-2">
      <aside>
        <search-form/>
      </aside>
    </section>
    <section class="col-10 data-table mt-3">
      <main>
        <data-table/>
      </main>
    </section>
  </div>
</template>

<style scoped>
aside {
  height: 100vh;
  border-right: 1px solid;
}

.data-table {
  height: 100vh;
}
</style>