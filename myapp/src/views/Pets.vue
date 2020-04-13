<template>
  <v-container grid-list-md fluid>
    <v-row>
      <v-col cols="12" sm="4" md="3" v-for="pet in dogs" :key="pet.breed">
          <app-dog :dog="pet"></app-dog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// import axios from "../config/axios"
import { Dogs } from "../config/dog";
import Dog from '../components/Dog'

export default {
    components:{
        appDog: Dog
    },
  data() {
    return {
      dogs: Dogs
    };
  },
  created(){
  // axios
  //     .get("/breed/husky/images/random")
  //     .then(response => {
  //       console.log(response);
  //       const husky = this.dogs.find(dog => dog.breed==='husky');
  //       husky.img = response.data.message
  //     })
  //     .catch(error=>{
  //       console.log(error)
  //     })
}

}
</script>

<style>
</style>