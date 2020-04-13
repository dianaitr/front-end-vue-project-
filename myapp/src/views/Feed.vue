<template>
  <v-container grid-list-md fluid>
    <v-btn type="submit" color="green" class="margen">Create new Subject</v-btn>
    <!-- <v-card>
      <v-app-bar color="blue">New Subject</v-app-bar>

      <form @submit.prevent="saveSubject">
        <v-text-field class="margen" v-model="titulo" label="Subject Title"></v-text-field>
        <v-text-field class="margen" v-model="descripcion" label="Subject Description"></v-text-field>

        <v-btn type="submit" color="green" class="margen">CREATE</v-btn>
      </form>
    </v-card> -->

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
      subjects: [],
      titulo: null,
      descripcion: null,
      nombre_autor: "Jose Galvis",
      id_autor: "Puol7XDGsyddcoECkziu"
    };
  },
  methods: {
    saveSubject() {
      if (this.titulo == null || this.descripcion == null) {
        alert("Fill all the information");
      } else {
        db.collection("subjects")
          .add({
            titulo: this.titulo,
            descripcion: this.descripcion,
            id_autor: this.id_autor,
            nombre_autor: this.nombre_autor
          })
          .catch(error => console.log(error));

        alert("Subject created, please refresh");
      }
    }
  },
  created() {
    db.collection("subjects")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
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
.margen {
  margin: 2%;
}
</style>