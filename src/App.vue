<template>
  <v-app>
    <v-content>
      <HeroPool />
      <HeroDeck />
    </v-content>
  </v-app>
</template>

<script>
import HeroPool from "./components/HeroPool";
import HeroDeck from "./components/HeroDeck";

export default {
  name: "App",
  components: {
    HeroPool,
    HeroDeck
  }
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>