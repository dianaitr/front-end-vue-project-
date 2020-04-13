<template>
  <v-container grid-list-md fluid>
    <v-row>
      <v-col cols="12" sm="4" md="3" v-for="sub in subjects" :key="sub.id">
        <app-subject :subject="sub"></app-subject>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Subject from "../components/Subjects";
import { Subjects } from "../config/subjects";
export default {
  components: {
    appSubject: Subject
  },
  data() {
    return {
      subjects: Subjects
    };
  }
};
</script>

<style>
</style>