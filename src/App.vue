<template>
  <v-app>
    <v-container fluid class="fill-height">
      <v-row align-content="space-between" class="fill-height">
        <!-- row 1 -->
        <v-col cols="2">
          <TriggeredSynergies :deck="deck" />
        </v-col>
        <v-col cols="8">
          <HeroPool @select-hero="selectHero" />
        </v-col>
        <v-col cols="2">
          <v-card>
            <!-- reserved for additional information -->
          </v-card>
        </v-col>

        <!-- row 2 -->
        <v-col cols="1">
          <CommanderLevel :heroSlot="deck.length" @add-slot="addSlot" v-model="scienceCrystal" />
        </v-col>
        <v-col cols="10">
          <HeroDeck :deck="deck" v-model="slotIndex" />
        </v-col>
        <v-col cols="1">
          <ResetButton @reset="reset" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TriggeredSynergies from "./components/TriggeredSynergies";
import HeroPool from "./components/HeroPool";
import CommanderLevel from "./components/CommanderLevel";
import HeroDeck from "./components/HeroDeck";
import ResetButton from "./components/ResetButton";

import heroes from "./assets/js/heroes";

export default {
  name: "App",
  components: {
    TriggeredSynergies,
    HeroPool,
    CommanderLevel,
    HeroDeck,
    ResetButton
  },
  data: () => ({
    slotIndex: 0,
    deck: [null, null, null],
    scienceCrystal: false
  }),
  methods: {
    addSlot() {
      this.deck.push(null);
    },
    selectHero(hero) {
      this.deck.splice(this.slotIndex, 1, heroes[hero]);
      let firstNullSlot = this.deck.findIndex(h => h === null);
      if (firstNullSlot === -1) {
        this.slotIndex += 1;
      } else {
        this.slotIndex = firstNullSlot;
      }
    },
    reset() {
      this.deck.splice(0, this.deck.length, null, null, null);
      this.scienceCrystal = false;
    }
  }
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>
