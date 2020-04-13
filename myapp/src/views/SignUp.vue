<template>
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="saveUser">
            <v-text-field class="margen" v-model="nombre" label="Name"></v-text-field>
            <v-text-field class="margen" v-model="apellido" label="Last Name"></v-text-field>
            <v-text-field class="margen" v-model="activo" label="Active"></v-text-field>
            <v-text-field class="margen" v-model="email" label="Email"></v-text-field>
           <v-text-field v-model="contrasena"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Visible"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>

            <v-btn type="submit" color="green" class="margen">REGISTER</v-btn>
        </form>
        
    </div>
</template>

<script>
import db from "../config/firebaseInit";
export default {
    data () {
        return {
            user: {
                nombre: '',
                apellido: '',
                activo: '',
                contrasena: '',
                email:'',
                numero_mensajes: 0,
                id_mensajes: null,
                id_subjets: null
            },
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
        },
        }
    },
    methods: {
        saveUser(){
            if(this.nombre == null || this.apellido == null || this.activo == null || this.email == null || this.contrasena == null){
            alert("Llene todos los campos")
        }else{
            db.collection("usuarios")
        .add({
          nombre: this.nombre,
          apellido: this.apellido,
          activo: this.activo,
          email: this.email,
          contrasena: this.contrasena
        })
        .catch(error => console.log(error));
        }
        }
        
    } 
};
</script>

<style>
.margen{
    margin: 1%;
}
</style>