<template>
    <div>
     <h2>Login</h2>
        <v-text-field class="margen" v-model="email" label="Email"></v-text-field>
        <v-text-field class="margen" v-model="contrasena" label="Password"></v-text-field>
    </div>
</template>

<script>

export default {
    data () {
        return {
            email: '',
            contrasena: ''
        }
    },
    methods: {
        
    }  
};
</script>