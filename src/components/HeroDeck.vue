<template>
  <v-item-group mandatory :value="index" @change="$emit('change-slot', $event)">
    <v-card>
      <v-container class="pa-0">
        <v-row dense>
          <v-col v-for="(hero, i) in deck" :key="i" cols="1">
            <v-item v-slot:default="{ active, toggle }">
              <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
                <v-btn
                  icon
                  x-large
                  :elevation="active ? 10 : 0"
                  :color="active ? 'red' : ''"
                  :outlined="active"
                  :input-value="active"
                  @click="toggle"
                >
                  <v-avatar size="48">
                    <v-icon v-if="hero === null" dark>mdi-plus-circle</v-icon>
                    <v-img v-else :src="hero.img" alt="hero"></v-img>
                  </v-avatar>
                </v-btn>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-item-group>
</template>

<script>
export default {
  name: "HeroDeck",
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
  }
};
</script>
