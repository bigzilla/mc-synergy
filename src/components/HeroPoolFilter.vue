<template>
  <v-container class="pa-0 pb-5">
    <!-- role -->
    <v-item-group mandatory>
      <v-row dense>
        <!-- no role filter -->
        <v-col cols="1">
          <v-item v-slot:default="{ active, toggle }">
            <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
              <v-btn
                icon
                :elevation="active ? 5 : 0"
                @click="
                toggle();
                filterRole(-1);
              "
              >
                <v-avatar :size="active ? 32 : 28">
                  <v-icon>mdi-check-all</v-icon>
                </v-avatar>
              </v-btn>
            </v-card>
          </v-item>
        </v-col>
        <!-- with role filter -->
        <v-col v-for="role in roles" :key="role.id" cols="1">
          <v-item v-slot:default="{ active, toggle }">
            <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
              <v-btn
                icon
                :elevation="active ? 5 : 0"
                @click="
                toggle();
                filterRole(role.id);
              "
              >
                <v-avatar :size="active ? 32 : 28">
                  <v-img
                    :src="role.img"
                    alt="role"
                    :gradient="
                    active
                      ? ''
                      : 'to top right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)'
                  "
                  ></v-img>
                </v-avatar>
              </v-btn>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>

    <!-- faction -->
    <v-item-group mandatory>
      <v-row dense>
        <!-- no faction filter -->
        <v-col cols="1">
          <v-item v-slot:default="{ active, toggle }">
            <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
              <v-btn
                icon
                :elevation="active ? 5 : 0"
                @click="
                toggle();
                filterFaction(-1);
              "
              >
                <v-avatar :size="active ? 32 : 28">
                  <v-icon>mdi-check-all</v-icon>
                </v-avatar>
              </v-btn>
            </v-card>
          </v-item>
        </v-col>
        <!-- with faction filter -->
        <v-col v-for="faction in factions" :key="faction.id" cols="1">
          <v-item v-slot:default="{ active, toggle }">
            <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
              <v-btn
                icon
                :elevation="active ? 5 : 0"
                @click="
                toggle();
                filterFaction(faction.id);
              "
              >
                <v-avatar :size="active ? 32 : 28">
                  <v-img
                    :src="faction.img"
                    alt="faction"
                    :gradient="
                    active
                      ? ''
                      : 'to top right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)'
                  "
                  ></v-img>
                </v-avatar>
              </v-btn>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import synergies, { type } from "../assets/js/synergies";

export default {
  name: "HeroPoolFilter",
  methods: {
    filterRole(role) {
      this.$emit("filter-role", role);
    },
    filterFaction(faction) {
      this.$emit("filter-faction", faction);
    }
  },
  computed: {
    roles() {
      return synergies.filter(synergy => {
        return synergy.type === type.role;
      });
    },
    factions() {
      return synergies.filter(synergy => {
        return synergy.type === type.faction;
      });
    }
  }
};
</script>
