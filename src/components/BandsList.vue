<template>
    <td>{{bands.nombre_banda}}</td>
     <td>{{bands.total_albumes}}</td>
      <td>{{bands.total_canciones}}</td>
      <td>{{bands.fecha_lanzamiento}}</td>
</template>
<script>


export default {
     props: ["bands", ],

}
</script>
