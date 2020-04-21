<template>
  <v-app>
    <main>
      <div class="app-container">
        <header class="app-header">
          <v-toolbar visible="false">
            <v-toolbar-items>
              <v-btn v-if="this.logged == true" to="/feed" text>Feed</v-btn>
              <v-btn v-if="this.logged == true" to="/users">Users</v-btn>
              <v-btn v-if="this.logged == true" to="/profile">Profile</v-btn>

              <v-btn v-if="this.logged == false" to="/login">Login</v-btn>
              <v-btn v-if="this.logged == false" to="/signup">Sign Up</v-btn>

              <v-spacer></v-spacer>

              <v-btn v-if="this.logged == true" @click="logout" color="red">Log out</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </header>
        <router-view></router-view>
      </div>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      logged: false
    };
  },
  methods: {
    changeNavBar() {
      
      if (this.logged == true) {
        this.logged = false;
      } else {
        this.logged = true;
      }
    },
    logout() {
      if (confirm("Are you sure you want to log out?")) {
        this.$store.commit("changeTheID", '');
        this.$store.commit("changeTheNombre", '');
        this.$store.commit("changeTheApellido", '');
        this.$store.commit("changeTheEmail", '');
        this.$store.commit("changeTheContrasena", '');
        this.$store.commit("changeTheActivo", '');
        this.logged = false;
        this.$router.push("/login");
      }
    },
    closeAll(){
      this.$store.commit("changeTheID", '');
        this.$store.commit("changeTheNombre", '');
        this.$store.commit("changeTheApellido", '');
        this.$store.commit("changeTheEmail", '');
        this.$store.commit("changeTheContrasena", '');
        this.$store.commit("changeTheActivo", '');
        this.logged = false;
        this.$router.push("/login");
    }
  },
  mounted() {
    this.bus.$on("changeNavBar", () => {
      this.changeNavBar();
    });
    this.bus.$on("closeAll", () => {
      this.closeAll();
    });
  },
  created() {
    this.$router.push("/login");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto|Material+Icons");

/*brown and mint*/
/*dark brown 32292F
	light mint 99E1D9
	bisque F0F7F4
	dark mint 70ABAF
	light brown 705D56*/

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

main {
  padding: 3%;
  font-family: "Roboto", "sans-serif";
  background: #fff top center repeat;
  color: #444;
}

h1,
p {
  margin: 0 0 1em 0;
}

img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

.app-container {
  max-width: 80%;
  margin: 0 auto;
  background-color: #fff;
}

.app-container > * {
  border-radius: 5px;
  font-size: 150%;
  margin-bottom: 10px;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}

.wrapper > * {
  padding: 15px;
  border-radius: 5px;
}

.light-mint {
  background-color: #99e1d9;
}

.dark-mint {
  background-color: #70abaf;
}

.light-brown {
  background-color: #705d56;
  color: #f0f7f4;
}

.dark-brown {
  background-color: #32292f;
  color: #f0f7f4;
}

.bisque {
  background-color: #f0f7f4;
}

/*orange and green*/
/*
	dark orange 771100
	orange CC6633
	light orange FF9900
	dark green 689980
	light green 86a193
	*/

.orange-green {
  background-image: url("https://raw.githubusercontent.com/VueVixens/projects/master/petshop/images/bg2.jpg");
}
.light-mint {
  background-color: #86a193;
}

.dark-mint {
  background-color: #689980;
}

.light-brown {
  background-color: #cc6633;
}

.dark-brown {
  background-color: #771100;
}

.bisque {
  background-color: #ff9900;
}

.panel {
  /* needed for the flex layout*/
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}

.tall-panel {
  grid-row-end: span 2;
}

.app-header,
.app-footer {
  flex: 0 1 100%;
  padding: 15px;
  text-align: center;
}

/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */
@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}
</style>
