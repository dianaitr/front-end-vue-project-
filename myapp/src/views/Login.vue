<template>
    <div>
     <h2>Login</h2>
     <form @submit.prevent="loginUser">
        <v-text-field class="margen" v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="contrasena"
            :rules="[rules.required, rules.min]"
            :type= "'password'"
            label="Password"
            hint="At least 8 characters"
            class="input-group--focused margen"            
          ></v-text-field>
        <v-btn type="submit" color="green" class="margen">ENTER</v-btn>
    </form>

    </div>
</template>

<script>
// import db from "../config/firebaseInit";
export default {
    data () {
        return {
            email: '',
            contrasena: '',
        rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters'
        },
        }
    },
    methods: {

        loginUser() {
    //         db.collection("usuarios")
    //         .get()
    //         .then(querySnapshot => {
    //             querySnapshot.forEach(doc => {

    //                 // if((doc.data().email == this.email) && (doc.data().contrasena == this.contrasena)){

    //                 // }
    //                 // const data = {
    //                 //     id: doc.id,
    //                 //     titulo: doc.data().titulo,
    //                 //     descripcion: doc.data().descripcion,
    //                 //     id_autor: doc.data().id_autor,
    //                 //     nombre_autor: doc.data().nombre_autor
    //                 // };
    //                 // this.subjects.push(data);
    //             });
    //   });
  }

        
    }  
};
</script>

<style>
.margen{
    margin: 2%;
}
</style>