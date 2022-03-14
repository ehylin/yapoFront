<template>
<div class="mt-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre banda</th>
      <th scope="col">Nombre album</th>
      <th scope="col">Url preview</th>
      <th scope="col">Precio</th>
      <th scope="col">Fecha de lanzamiento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{bans.nombre_banda}}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>


export default {
   props: ["bans"]
}
</script>
