<template>
  <v-item-group mandatory :value="index" @change="$emit('change-slot', $event)">
    <v-card dark color="grey darken-3">
      <v-container class="pa-0">
        <v-row>
          <v-col v-for="(hero, i) in deck" :key="i" cols="auto" class="py-0">
            <v-item v-slot:default="{ active, toggle }">
              <HeroSlot :activeSlot="active" :toggleSlot="toggle" :hero="hero" />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-item-group>
</template>

<script>
import HeroSlot from "./HeroSlot";

export default {
  name: "HeroDeck",
  components: {
    HeroSlot
  },
  props: {
    deck: {
      type: Array,
      default: () => []
    },
    index: Number
  },
  model: {
    prop: "index",
    event: "change-slot"
  },
  methods: {
    deleteHero() {
      this.$emit("delete-hero");
    }
  },
  created() {
    window.addEventListener("keyup", e => {
      if (e.key === "Delete" || e.key == "Backspace") {
        this.deleteHero();
      }
    });
  }
};
</script>
