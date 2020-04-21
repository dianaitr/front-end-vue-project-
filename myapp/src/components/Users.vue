<template>
  <div>
    <h1></h1>
    <div>
      <h3 class="style">{{user.nombre}} {{user.apellido}}</h3>
      <p class="style">{{user.email}}</p>
      <p class="style">Active : {{user.activo}}</p>
      <p class="style">Number of messages : {{user.numero_subjects}}</p>
      
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
};
</script>

<style>
.style {
  font-family: Arial, Helvetica, sans-serif;
}

.margen {
  margin: 5px;
  align-content: flex-end;
}
</style>