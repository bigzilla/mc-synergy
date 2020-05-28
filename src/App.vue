<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container fluid class="fill-height py-0">
        <v-row align-content="space-between" class="fill-height">
          <!-- row 1 -->
          <v-col cols="2">
            <TriggeredSynergies :deck="deck" />
          </v-col>
          <v-col cols="8" class="pb-0">
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
            <HeroDeck :deck="deck" v-model="slotIndex" @delete-hero="deleteHero" />
          </v-col>
          <v-col cols="1">
            <ResetButton @reset="reset" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import TriggeredSynergies from "./components/TriggeredSynergies";
import HeroPool from "./components/HeroPool";
import CommanderLevel from "./components/CommanderLevel";
import HeroDeck from "./components/HeroDeck";
import ResetButton from "./components/ResetButton";

import heroes from "./assets/js/heroes";

export default {
  name: "App",
  components: {
    AppBar,
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
      this.slotIndex = this.findFirstNullSlot();
    },
    selectHero(hero) {
      this.deck.splice(this.slotIndex, 1, {
        ...heroes[hero],
        items: [null, null, null] // 3 item slots
      });
      let firstNullSlot = this.findFirstNullSlot();
      if (firstNullSlot === -1) {
        this.slotIndex++;
      } else {
        this.slotIndex = firstNullSlot;
      }
    },
    findFirstNullSlot() {
      return this.deck.findIndex(h => h === null);
    },
    deleteHero() {
      this.deck.splice(this.slotIndex, 1, null);
      this.slotIndex++;
    },
    reset() {
      this.deck.splice(0, this.deck.length, null, null, null);
      this.scienceCrystal = false;
      this.slotIndex = 0;
    }
  }
};
</script>

<style>
html {
  overflow: hidden !important;
  user-select: none;
}
</style>
