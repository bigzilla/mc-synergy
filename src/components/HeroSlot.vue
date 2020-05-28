<template>
  <v-item-group mandatory v-model="itemIndex">
    <v-card
      :flat="!activeSlot"
      :raised="activeSlot"
      :color="activeSlot? 'grey darken-2': 'grey darken-3'"
    >
      <v-container class="pa-0">
        <v-row v-if="hero === null" no-gutters justify="center">
          <v-col v-for="n in 3" :key="n">
            <v-btn icon disabled small></v-btn>
          </v-col>
        </v-row>
        <v-row v-else no-gutters>
          <v-col v-for="(item, i) in hero.items" :key="i" cols="4" class="text-center">
            <v-item v-slot:default="{active, toggle}">
              <v-btn icon @click="toggle(), toggleSlot(), dialog=true" small>
                <v-icon v-if="item === null">mdi-plus-circle</v-icon>
                <v-avatar v-else size="24">
                  <v-img :src="item.img" alt="crystal"></v-img>
                </v-avatar>
              </v-btn>
            </v-item>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="text-center">
            <v-btn
              icon
              x-large
              :elevation="activeSlot ? 10 : 0"
              :outlined="activeSlot"
              :input-value="activeSlot"
              @click="toggleSlot"
            >
              <v-avatar size="48">
                <v-icon v-if="hero === null" dark>mdi-plus-circle</v-icon>
                <v-img v-else :src="hero.img" alt="hero"></v-img>
              </v-avatar>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <ItemPool v-model="dialog" @add-crystal="addCrystal" @remove-crystal="removeCrystal" />
  </v-item-group>
</template>

<script>
import ItemPool from "./ItemPool";
import crystals from "../assets/js/crystals";

export default {
  name: "HeroSlot",
  components: {
    ItemPool
  },
  data: () => ({
    dialog: false,
    itemIndex: 0
  }),
  props: ["hero", "activeSlot", "toggleSlot"],
  methods: {
    addCrystal(id) {
      this.hero.items.splice(this.itemIndex, 1, crystals[id]);
    },
    removeCrystal() {
      this.hero.items.splice(this.itemIndex, 1, null);
    }
  }
};
</script>