<template>
  <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
    <v-badge overlap color="rgba(0, 0, 0, 0)" offset-x="25">
      <v-btn
        v-if="!scienceCrystal"
        slot="badge"
        icon
        color="green"
        @click="$emit('apply-science-crystal', true); addSlot()"
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
        @click="addSlot"
      >Lv. {{ level }}</v-btn>
    </v-badge>
  </v-card>
</template>

<script>
export default {
  name: "CommanderLevel",
  props: {
    heroSlot: Number,
    scienceCrystal: Boolean
  },
  model: {
    prop: "scienceCrystal",
    event: "apply-science-crystal"
  },
  methods: {
    addSlot() {
      this.$emit("add-slot");
    }
  },
  computed: {
    level() {
      return this.scienceCrystal === true ? this.heroSlot - 1 : this.heroSlot;
    },
    maxLevel() {
      return this.level >= 9 ? true : false;
    }
  }
};
</script>