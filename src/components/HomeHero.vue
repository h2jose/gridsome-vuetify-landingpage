<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout row wrap align-end >
      <v-flex xs12>
        <div class="display-3 font-weight-black white--text">Gridsome + Vuetify LandingPage</div>
        <div class="display-1 font-weight white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, porro!</div>
      </v-flex>
      <v-flex xs12 text-xs-center>
        <v-btn fab class="primary darken-4" @click="$vuetify.goTo('#Types', {offset: 0})">
          <v-icon large color="white">expand_more</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
	  name: 'HomeHero'
	};
</script>

<style scoped>
.home-hero {
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url('../images/photo-home.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
.btn-color {
  background-color: #ff69b4;
    color: #ffffff;
}
</style>
