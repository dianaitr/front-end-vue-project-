<template>
  <v-container grid-list-md fluid>
    <v-card>
      <v-app-bar color="blue">Search User</v-app-bar>

      <form @submit.prevent="searchUser()">
        <v-text-field class="margen" v-model="elnombre" label="User's name"></v-text-field>
        <v-btn type="submit" color="green" class="margen">SEARCH</v-btn>
      </form>

      <v-btn @click="all()" color="yellow" class="margen">SHOW ALL</v-btn>

    </v-card>

    <v-row v-for="user in users" :key="user.id">
      <app-user :user="user"></app-user>
    </v-row>
  </v-container>
</template>

<script>
import User from "../components/Users";
import db from "../config/firebaseInit";
export default {
  components: {
    appUser: User
  },
  data() {
    return {
      users: [],
      elnombre: null
    };
  },

  methods: {
    searchUser() {
      this.users = [];
      db.collection("usuarios")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.data().nombre == this.elnombre) {
              const data = {
                id: doc.id,
                nombre: doc.data().nombre,
                apellido: doc.data().apellido,
                email: doc.data().email,
                activo: doc.data().activo,
                numero_subjects: doc.data().numero_subjects
              };
              this.users.push(data);
            }
          });
        });
    },
    all(){
      this.users = [];
      db.collection("usuarios")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            nombre: doc.data().nombre,
            apellido: doc.data().apellido,
            email: doc.data().email,
            activo: doc.data().activo,
            numero_subjects: doc.data().numero_subjects
          };
          this.users.push(data);
        });
      });
    }
  },
  created() {
    db.collection("usuarios")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            nombre: doc.data().nombre,
            apellido: doc.data().apellido,
            email: doc.data().email,
            activo: doc.data().activo,
            numero_subjects: doc.data().numero_subjects
          };
          this.users.push(data);
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