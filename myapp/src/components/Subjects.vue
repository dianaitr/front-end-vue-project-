<template>
  <div>
    <h1></h1>
    <div>
      <h2 id="titulo" class="style">{{subject.titulo}}</h2>
      <h3 class="style">{{subject.nombre_autor}}</h3>
      <hr />
      <p class="style">{{subject.descripcion}}</p>
    </div>
    <v-btn outlined="true" color="red" @click="deleteSubject">DELETE</v-btn>
  </div>
</template>

<script>
import db from "../config/firebaseInit";

export default {
  props: {
    subject: {
      type: Object
    }
  },
  methods: {
    deleteSubject() {
      if (confirm("Are you sure you want to delete?")) {
       
        db.collection("subjects")
          .doc(this.subject.id)
          .delete()
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
          alert("Subject deleted");
          this.bus.$emit('updateSubjects')
      } 
    }
  }
};
</script>

<style>
.style {
  font-family: Arial, Helvetica, sans-serif;
}

#titulo {
  color: #3342ff;
}
.margen {
  margin: 5px;
  align-content: flex-end;
}
</style>