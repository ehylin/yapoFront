<template>
<div class="">
  <form class="d-flex">
      <input
        type="text"
        placeholder="Search"
        class="form-control my-2"
        v-model="search"
      />
      <button class="btn btn-danger" @click="processInput()">Buscar</button>
    </form>
    <div>
        <LoadingComponent v-if="loading"/>
        <ShowBans :bans="bans" v-if="name" />  
      </div>
</div>
</template>

<script>
import { ref, computed  } from 'vue';
import { useStore } from 'vuex';
import ShowBans from './ShowBans.vue'
import LoadingComponent from './LoadingComponent.vue'
export default {
  components:{
    ShowBans,
    LoadingComponent
  },
  setup() {
    const name = ref(false)
    const search = ref('');
    const loading = ref(false)
    const store = useStore();


     const bans = computed(() => {
            return  store.state.bansFilter;
        });

     const processInput = () => {
        loading.value = true
        store.dispatch('getBansFilter', search.value);
        name.value = true
        loading.value = false
    };
 

    return{ search, processInput, name , bans, loading};
  },

}

</script>

<style>

</style>