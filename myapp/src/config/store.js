import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    activo: '',
    numero_subjects: 0,

  },
  mutations: {

    changeTheID(state, newID) {
      state.id = newID;
    },
    changeTheNombre(state, newNombre) {
      state.nombre = newNombre;
    },
    changeTheApellido(state, newApellido) {
      state.apellido = newApellido;
    },
    changeTheEmail(state, newEmail) {
      state.email = newEmail;
    },
    changeTheContrasena(state, newContrasena) {
      state.contrasena = newContrasena;
    },
    changeTheActivo(state, newActivo) {
      state.activo = newActivo;
    },
    changeTheNumSubs(state, newNumSubs) {
      state.numero_subjects = newNumSubs;
    },
    aumentarLosSubs(state) {
      state.numero_subjects++;

    },
    disminuirLosSubs(state) {
      state.numero_subjects--;
    }
  },
  actions: {

    changeID({ commit }, newID) {
      commit("changeTheID", newID)
    },
    changeNombre({ commit }, newNombre) {
      commit("changeTheNombre", newNombre)
    },
    changeApellido({ commit }, newApellido) {
      commit("changeTheApellido", newApellido)
    },
    changeEmail({ commit }, newEmail) {
      commit("changeTheEmail", newEmail)
    },
    changeContrasena({ commit }, newContrasena) {
      commit("changeTheContrasena", newContrasena)
    },
    changeActivo({ commit }, newActivo) {
      commit("changeTheActivo", newActivo)
    },
    changeNumSubs({ commit }, newNumSubs) {
      commit("changeTheNumSubs", newNumSubs)
    },
    aumentarSubs({ commit }) {
      commit("aumentarLosSubs")
    },
    disminuirSubs({ commit }) {
      commit("disminuirLosSubs")
    }
  }

});