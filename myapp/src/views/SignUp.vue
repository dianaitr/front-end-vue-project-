<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="saveUser">
      <v-text-field class="margen" v-model="nombre" label="Name"></v-text-field>
      <v-text-field class="margen" v-model="apellido" label="Last Name"></v-text-field>
      <v-switch v-model="activo" class="ma-2" label="Active"></v-switch>

      <v-text-field class="margen" v-model="email" label="Email"></v-text-field>
      <v-text-field
        v-model="contrasena"
        :rules="[rules.required, rules.min]"
        :type="'password'"
        label="Password"
        hint="At least 8 characters"
        class="input-group--focused margen"
      ></v-text-field>

      <v-btn type="submit" color="green" class="margen">REGISTER</v-btn>
    </form>
  </div>
</template>

<script>
import db from "../config/firebaseInit";
export default {
  data() {
    return {
      user: {
        nombre: "",
        apellido: "",
        activo: false,
        contrasena: "",
        email: "",
        numero_subjects: "",
        id_mensajes: null,
        id_subjets: null
      },
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    saveUser() {
      if (
        this.nombre == null ||
        this.apellido == null ||
        this.activo == null ||
        this.email == null ||
        this.contrasena == null
      ) {
        alert("Llene todos los campos");
      } else {
        this.numero_subjects = 0;
        db.collection("usuarios")
          .add({
            nombre: this.nombre,
            apellido: this.apellido,
            activo: this.activo,
            email: this.email,
            contrasena: this.contrasena,
            numero_subjects: this.numero_subjects
          })
          .catch(error => console.log(error));
      }
      alert("You've been registred. Now please login!");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.margen {
  margin: 1%;
}
</style>