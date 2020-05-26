<template>
  <v-app>
    <v-content>
      <HeroDeck />
    </v-content>
  </v-app>
</template>

<script>
import HeroDeck from "./components/HeroDeck";

export default {
  name: "App",
  components: {
    HeroDeck
  }
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>