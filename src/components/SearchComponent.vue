<template>
<div class="search">
  <form class="d-flex">
      <input
        type="text"
        placeholder="Buscador por nombre"
        class="form-control my-2"
        v-model="search"
        @keyup="processInput"
      />
    </form>
    <div>
      </div>
</div>
</template>

<script>
import { ref  } from 'vue';
import { useStore } from 'vuex';
export default {
  components:{
  },
  setup() {

     const search = ref('');
    const store = useStore();


     const processInput = () => {
  
        store.dispatch('filterName', search.value);
         
     
    };
 

    return{ search, processInput };



  },

}

</script>

<style>

</style>