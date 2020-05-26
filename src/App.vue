<template>
  <v-app>
    <v-content>
      <HeroPool />
      <HeroDeck />
      <TriggeredSynergies />
    </v-content>
  </v-app>
</template>

<script>
import HeroPool from "./components/HeroPool";
import HeroDeck from "./components/HeroDeck";
import TriggeredSynergies from "./components/TriggeredSynergies";

export default {
  name: "App",
  components: {
    HeroPool,
    HeroDeck,
    TriggeredSynergies
  }
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>