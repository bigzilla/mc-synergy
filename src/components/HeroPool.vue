<template>
  <v-card>
    <v-container>
      <v-row dense>
        <v-col cols="12" class="py-0">
          <HeroPoolFilter @filter-role="filterRole" @filter-faction="filterFaction" />
        </v-col>
      </v-row>
      <v-item-group>
        <v-row dense>
          <v-col v-for="hero in filteredHeroes" :key="hero.id" cols="1">
            <v-item>
              <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
                <v-btn icon x-large outlined :color="hero.type" @click="selectHero(hero.id)">
                  <v-avatar size="48">
                    <v-img :src="hero.img" alt="hero"></v-img>
                  </v-avatar>
                </v-btn>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

<script>
import HeroPoolFilter from "./HeroPoolFilter";
import heroes from "../assets/js/heroes";

export default {
  name: "HeroPool",
  components: {
    HeroPoolFilter
  },
  data: () => ({
    role: -1,
    faction: -1
  }),
  methods: {
    filterRole(role) {
      this.role = role;
    },
    filterFaction(faction) {
      this.faction = faction;
    },
    selectHero(hero) {
      this.$emit("select-hero", hero);
    }
  },
  computed: {
    filteredHeroes() {
      return heroes.filter(h => {
        let isRole = this.role === -1 ? true : h.synergies.includes(this.role);
        let isFaction =
          this.faction === -1 ? true : h.synergies.includes(this.faction);

        return isRole && isFaction;
      });
    }
  }
};
</script>
