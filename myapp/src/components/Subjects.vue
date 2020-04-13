<template>
  <div>
      <h1></h1>
     <v-card >
      <v-card-title>
        <div>
          <h2 id="titulo" class="style">{{subject.titulo}}</h2>
          <h3 class="style">{{subject.nombre_autor}}</h3>
          <hr>
          <p class="style">{{subject.descripcion}}</p>
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
.style {
  font-family: Arial, Helvetica, sans-serif;
}

#titulo{
    color: #3342FF
}

</style>