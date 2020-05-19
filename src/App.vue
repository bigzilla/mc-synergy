<template>
  <v-app>
    <HeroPool />
    <HeroDeck />
  </v-app>
</template>

<script>
import HeroPool from "./components/HeroPool";
import HeroDeck from "./components/HeroDeck";

export default {
  name: "App",
  components: {
    HeroPool,
    HeroDeck,
  },
  data: () => ({
    //
  }),
};
</script>
