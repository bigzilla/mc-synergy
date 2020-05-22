<template>
  <v-badge overlap color="rgba(0, 0, 0, 0)" offset-x="25">
    <v-btn
      v-if="!scienceCrystal"
      slot="badge"
      icon
      color="green"
      @click="scienceCrystal = !scienceCrystal; applyScienceCrystal()"
    >
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
    <v-btn v-else slot="badge" icon>
      <v-avatar size="32">
        <v-img :src="require('@/assets/img/item_science_crystal.png')" alt="item"></v-img>
      </v-avatar>
    </v-btn>
    <v-btn
      x-large
      outlined
      fab
      color="blue"
      class="text-capitalize"
      :disabled="maxLevel"
      @click="levelUp"
    >Lv. {{ level }}</v-btn>
  </v-badge>
</template>

<script>
export default {
  name: "CommanderLevel",
  data: () => ({
    level: 3,
    scienceCrystal: false
  }),
  methods: {
    levelUp() {
      this.level += 1;
      this.$emit("level-up");
    },
    applyScienceCrystal() {
      this.$emit("level-up");
    }
  },
  computed: {
    maxLevel() {
      return this.level >= 9 ? true : false;
    }
  }
};
</script>