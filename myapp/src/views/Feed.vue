<template>
  <v-container grid-list-md fluid>
    <v-row v-for="sub in subjects" :key="sub.id">
      <app-subject :subject="sub"></app-subject>
    </v-row>
  </v-container>
</template>

<script>
import Subject from "../components/Subjects";
import db from "../config/firebaseInit";
export default {
  components: {
    appSubject: Subject
  },
  data() {
    return {
      subjects: []
    };
  },
  created() {
    db.collection("subjects")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.data().id,
            titulo: doc.data().titulo,
            descripcion: doc.data().descripcion,
            id_autor: doc.data().id_autor,
            nombre_autor: doc.data().nombre_autor
          };
          this.subjects.push(data);
        });
      });
  }
};
</script>

<style>
</style>