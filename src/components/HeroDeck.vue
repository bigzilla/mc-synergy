<template>
  <v-container>
    <v-item-group mandatory v-model="activeIndex">
      <v-row>
        <HeroPool @select-hero="selectHero" />
      </v-row>
      <v-row>
        <v-col cols="2">
          <CommanderLevel @level-up="levelUp" />
        </v-col>
        <v-col v-for="(hero, i) in deck" :key="i" cols="1">
          <v-item v-slot:default="{ active, toggle }">
            <v-btn
              v-if="hero === null"
              icon
              x-large
              :elevation="active ? 10 : 0"
              :color="active ? 'red' : ''"
              :outlined="active"
              :input-value="active"
              @click="toggle"
            >
              <v-avatar size="48">
                <v-icon dark>mdi-plus-circle</v-icon>
              </v-avatar>
            </v-btn>
            <v-btn
              v-else
              icon
              x-large
              :elevation="active ? 10 : 0"
              :color="active ? hero.type : ''"
              :outlined="active"
              :input-value="active"
              @click="toggle"
            >
              <v-avatar size="48">
                <v-img :src="hero.img" alt="hero"></v-img>
              </v-avatar>
            </v-btn>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
    <TriggeredSynergies :deck="deck" />
  </v-container>
</template>

<script>
import HeroPool from "./HeroPool";
import TriggeredSynergies from "./TriggeredSynergies";
import CommanderLevel from "./CommanderLevel";
import heroes from "../assets/js/heroes";

export default {
  name: "HeroDeck",
  data: () => ({
    activeIndex: 0,
    deck: [null, null, null]
  }),
  components: {
    HeroPool,
    TriggeredSynergies,
    CommanderLevel
  },
  methods: {
    levelUp() {
      this.deck.push(null);
    },
    findFirstNullDeck() {
      return this.deck.findIndex(h => h === null);
    },
    selectHero(hero) {
      this.deck.splice(this.activeIndex, 1, heroes[hero]);
      let firstNullDeck = this.findFirstNullDeck();
      if (firstNullDeck === -1) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = firstNullDeck;
      }
    }
  }
};
</script>
