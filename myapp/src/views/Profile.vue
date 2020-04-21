<template>
  <v-container grid-list-md fluid>
    <v-card>
      <v-app-bar color="blue">New Subject</v-app-bar>

      <form @submit.prevent="editUser">
        <v-text-field class="margen" v-model="nombre" label="Name"></v-text-field>
        <v-text-field class="margen" v-model="apellido" label="Lastname"></v-text-field>

        <v-text-field class="margen" v-model="email" label="Email"></v-text-field>
        <p class="style">Number of messages : {{numero_subjects}}</p>

        <v-btn type="submit" color="green" class="margen">UPDATE</v-btn>
        <v-btn @click="closeAccount()" color="red" class="margen">CLOSE ACCOUNT</v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import db from "../config/firebaseInit";
export default {
  data() {
    return {
      id: "",
      nombre: "",
      apellido: "",
      id_subjects: [],
      email: "",
      numero_subjects: ""
    };
  },
  computed: {
    id_usu() {
      return this.$store.state.id;
    },
    nombre_usu() {
      return this.$store.state.nombre;
    },
    apellido_usu() {
      return this.$store.state.apellido;
    },
    email_usu() {
      return this.$store.state.email;
    },
    numero_subjects_usu() {
      return this.$store.state.numero_subjects;
    }
  },
  created() {
    (this.id = this.id_usu),
      (this.nombre = this.nombre_usu),
      (this.apellido = this.apellido_usu),
      (this.email = this.email_usu),
      (this.numero_subjects = this.numero_subjects_usu);
  },
  methods: {
    editUser() {
      db.collection("usuarios")
        .doc(this.id)
        .update({
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email
        });
      this.$store.commit("changeTheNombre", this.nombre);
      this.$store.commit("changeTheApellido", this.apellido);
      this.$store.commit("changeTheEmail", this.email);
      alert("Profile updated!");
      db.collection("subjects")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.data().id_autor == this.id) {
              this.id_subjects.push(doc.id);
              console.log("ENTRA 1 " + this.id_subjects.length);
            }
            console.log("ENTRA 2 " + this.id_subjects.length);
          });
        });
      /* console.log("ENTRA 3 "+ this.id_subjects.length);
      for (var i = 0; i < this.id_subjects.length; i++) {
        console.log(this.id_subjects[i]);
      } */
      /* this.id_subjects.forEach(sub => {
          
        db.collection("subjects")
          .doc(sub)
          .update({
            nombre_autor: this.nombre
          });
      }); */
    },
    closeAccount() {
      if (confirm("Are you sure you want to close your account?")) {
        if (this.numero_subjects > 0) {
          alert(
            "You have one or more associated subjects, so you can't close your account"
          );
        } else {
          db.collection("usuarios")
            .doc(this.id)
            .update({
              activo: false
            });
          alert("Your account is now Inactive");
          this.bus.$emit("closeAll");
        }
      }
    }
  }
};
</script>

<style>
.margen {
  margin: 2%;
}
</style>