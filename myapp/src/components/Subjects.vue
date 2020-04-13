<template>
  <div>
    <v-card>
      <v-card-title>
        <div>
          <h3>{{subject.titulo}}</h3>
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