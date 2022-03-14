<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="home text-center">
                    <img :src="require('../assets/imgHome.png')" width="260" class="img-fluid" alt="imagen pokemon">
                    <h1>Bienvenidos al buscador de bandas Favorito</h1>
                     <router-link class="btn btn-success boton" to="/listabandas">Ir</router-link>
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>