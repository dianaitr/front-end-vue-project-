<template>
  <div>
      <h1></h1>
     <v-card>
      <v-card-title>
        <div>
          <h2>{{subject.titulo}}</h2>
          <h3>{{subject.nombre_autor}}</h3>
          <p>{{subject.descripcion}}</p>
        </div>
      </v-card-title>
    </v-card> 
  </div>
</template>

<script>
export default {
    props: {
        subject: {
            type: Object
        }
    },
};
</script>

<style>
</style>