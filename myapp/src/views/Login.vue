<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <v-text-field class="margen" v-model="email" label="Email"></v-text-field>
      <v-text-field
        v-model="contrasena"
        :type="'password'"
        label="Password"
        class="input-group--focused margen"
      ></v-text-field>
      <v-btn type="submit" color="green" class="margen">ENTER</v-btn>
    </form>
  </div>
</template>

<script>
import db from "../config/firebaseInit";
export default {
  data() {
    return {
      email: "",
      contrasena: "",
      respuesta: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  methods: {
    loginUser() {
      db.collection("usuarios")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (
              doc.data().email == this.email &&
              doc.data().contrasena == this.contrasena
            ) {
              if (doc.data().activo == true) {
                this.$store.commit("changeTheID", doc.id);
                this.$store.commit("changeTheNombre", doc.data().nombre);
                this.$store.commit("changeTheApellido", doc.data().apellido);
                this.$store.commit("changeTheEmail", doc.data().email);
                this.$store.commit(
                  "changeTheContrasena",
                  doc.data().contrasena
                );
                this.$store.commit("changeTheActivo", doc.data().activo);
                this.$store.commit(
                  "changeTheNumSubs",
                  doc.data().numero_subjects
                );

                alert("You're logged!");
                this.respuesta = true;
                this.bus.$emit("changeNavBar");
                this.$router.push("/feed");
              } else {
                if (
                  confirm(
                    "Your account is clossed (inactive). Do you wish to re open it?"
                  )
                ) {
                  db.collection("usuarios")
                    .doc(doc.id)
                    .update({
                      activo: true
                    });
                  alert("Your account is now active");
                  this.$store.commit("changeTheID", doc.id);
                  this.$store.commit("changeTheNombre", doc.data().nombre);
                  this.$store.commit("changeTheApellido", doc.data().apellido);
                  this.$store.commit("changeTheEmail", doc.data().email);
                  this.$store.commit(
                    "changeTheContrasena",
                    doc.data().contrasena
                  );
                  this.$store.commit("changeTheActivo", doc.data().activo);
                  this.$store.commit(
                    "changeTheNumSubs",
                    doc.data().numero_subjects
                  );

                  alert("You're logged!");
                  this.respuesta = true;
                  this.bus.$emit("changeNavBar");
                  this.$router.push("/feed");
                }
              }
            }
          });

          if (this.respuesta == false) {
            alert("Wrong email or password");
          }
        });
    }
  }
};
</script>

<style>
.margen {
  margin: 2%;
}
</style>