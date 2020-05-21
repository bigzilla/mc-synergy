<template>
  <v-container>
    <v-item-group mandatory v-model="activeIndex">
      <v-row>
        <v-col cols="2">
          <v-btn
            x-large
            outlined
            fab
            color="blue"
            class="text-capitalize"
            :disabled="maxLevel"
            @click="upgradeLevel"
          >Lv. {{ level }}</v-btn>
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
import TriggeredSynergies from "./TriggeredSynergies";
import heroes from "../assets/js/heroes";

export default {
  name: "HeroDeck",
  data: () => ({
    level: 3,
    maxLevel: false,
    activeIndex: 0,
    deck: [null, null, null]
  }),
  components: {
    TriggeredSynergies
  },
  mounted() {
    this.$root.$on("select-hero", hero => {
      this.deck.splice(this.activeIndex, 1, heroes[hero]);
      let firstNullDeck = this.findFirstNullDeck();
      if (firstNullDeck === -1) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = firstNullDeck;
      }
    });
  },
  methods: {
    upgradeLevel() {
      this.level += 1;
      this.deck.push(null);
      if (this.level === 9) {
        this.maxLevel = true;
      }
    },
    findFirstNullDeck() {
      return this.deck.findIndex(h => h === null);
    }
  }
};
</script>
