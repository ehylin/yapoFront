<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Escriba el nombre de la banda musical que quiere buscar</h2>
            <BansComponent />
        </div>
    </div>
</div> 
</template>

<script>
import BansComponent from '../components/BansComponent.vue'

export default {
    components:{
        BansComponent,
    },
    setup() {
        
    },
}
</script>
