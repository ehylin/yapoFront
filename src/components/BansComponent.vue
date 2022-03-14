<template>
<div class="container">
 <LoadingComponent v-if="loading"/>   
<SearchComponent />
<div class="mt-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre banda</th>
      <th scope="col">Total albunes</th>
      <th scope="col">Total canciones</th>
      <th scope="col">Fecha de lanzamiento</th>
    </tr>
  </thead>
  <tbody>
    <tr 
            v-for= "bands in bands" :key="bands.name">
                <BandsList :bands="bands" />
            
            </tr>
  </tbody>
</table>
</div>
 
          
</div>

</template>

<script>
import SearchComponent from './SearchComponent.vue'
import LoadingComponent from './LoadingComponent.vue'
import BandsList from './BandsList.vue'
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex"


export default {
  components:{
    SearchComponent, 
    BandsList,
    LoadingComponent
  },
  setup() {
      const loading = ref(false)
      const store = useStore();

      const bands = computed(() => {
        return  store.state.bands;
      });
       
         onMounted(async() =>{
             loading.value = true
                await store.dispatch("getBands"); 
            loading.value = false
              
        });

    return { bands, loading}
    },

}
</script>

<style>

</style>