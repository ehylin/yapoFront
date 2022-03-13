<template>
  <form class="d-flex">
      <input
        type="text"
        placeholder="Search"
        class="form-control my-2"
        v-model="search"
      />
      <button class="btn btn-danger" @click="processInput()">Buscar</button>
    </form>
</template>

<script>
import { ref,   } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
 
    const search = ref('');
    const store = useStore();

     const processInput = () => {
        store.dispatch('getBansFilter', search.value);
    };
 

    return{ search, processInput };
  },

}

</script>

<style>

</style>