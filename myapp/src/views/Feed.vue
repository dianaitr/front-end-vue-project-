<template>
  <v-container grid-list-md fluid>
    <v-card>
      <v-app-bar color="blue">New Subject</v-app-bar>

      <form @submit.prevent="saveSubject">
        <v-text-field class="margen" v-model="titulo" label="Subject Title"></v-text-field>
        <v-text-field class="margen" v-model="descripcion" label="Subject Description"></v-text-field>

        <v-btn type="submit" color="green" class="margen">CREATE</v-btn>
      </form>
    </v-card>

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
      success: false,
      subjects: [],
      titulo: null,
      descripcion: null
    };
  },
  computed: {
    user_id() {
      return this.$store.state.id;
    },
    user_name() {
      return this.$store.state.nombre + " " + this.$store.state.apellido;
    },
    num_subs() {
      return this.$store.state.numero_subjects;
    }
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
            id_autor: this.user_id,
            nombre_autor: this.user_name
          })
          .catch(error => console.log(error));
        this.updateSubjects();
        alert("Subject added succesfully");
        this.$store.commit("aumentarLosSubs");
        db.collection("usuarios")
          .doc(this.user_id)
          .update({
            numero_subjects: this.num_subs
          });
      }
    },
    updateSubjects() {
      this.subjects = [];
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
            this.titulo = null;
            this.descripcion = null;
          });
        });
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
  },
  mounted() {
    this.bus.$on("updateSubjects", () => {
      this.updateSubjects();
    });
  }
};
</script>

<style>
.margen {
  margin: 2%;
}
</style>