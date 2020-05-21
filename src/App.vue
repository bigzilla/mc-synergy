<template>
  <v-app>
    <HeroPool />
    <HeroDeck />
    <TriggeredSynergies />
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
