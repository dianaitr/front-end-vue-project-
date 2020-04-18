<template>
  <div>
    <h1></h1>
    <div>
      <h2 id="titulo" class="style">{{subject.titulo}}</h2>
      <h3 class="style">{{subject.nombre_autor}}</h3>
      <hr />
      <p class="style">{{subject.descripcion}}</p>
    </div>
    <v-btn
      v-if="user_id == subject.id_autor"
      outlined="true"
      color="red"
      @click="deleteSubject"
    >DELETE</v-btn>
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
  computed: {
    user_id() {
      return this.$store.state.id;
    },
    num_subs() {
      return this.$store.state.numero_subjects;
    }
  },
  methods: {
    deleteSubject() {
      if (confirm("Are you sure you want to delete the subject?")) {
        db.collection("subjects")
          .doc(this.subject.id)
          .delete()
          .catch(function(error) {
            console.error("Error removing document: ", error);
          });
        alert("Subject deleted");

        this.$store.commit("disminuirLosSubs");
        db.collection("usuarios")
          .doc(this.user_id)
          .update({
            numero_subjects: this.num_subs
          });

        this.bus.$emit("updateSubjects");
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