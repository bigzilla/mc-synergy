<template>
  <v-container>
    <v-row>
      <v-col v-for="synergy in triggeredSynergies" :key="synergy.id" cols="auto">
        <v-card class="d-flex flex-column justify-center" tile flat>
          <v-btn icon class="mx-auto">
            <v-avatar size="32">
              <v-img
                :src="synergy.img"
                alt="role"
                :gradient="synergy.active === 0 ? 'to top right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)' : ''"
              ></v-img>
            </v-avatar>
          </v-btn>
          <div class="mx-auto">
            <span class="green--text">{{ synergy.n }}</span>
            <span>/{{ synergy.divider }}</span>
          </div>
          <v-progress-linear
            color="orange"
            background-color="grey"
            :value="synergy.active/synergy.step*100"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import synergies, { synergy } from "../assets/js/synergies";

export default {
  name: "TriggeredSynergies",
  props: {
    deck: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    triggeredSynergies() {
      let res = {};
      // remove duplicate heroes and null slot first
      let set = new Set(this.deck);
      set.delete(null);

      Array.from(set).forEach(h => {
        h.synergies.forEach(synergy => {
          let asset = synergies[synergy];
          if (typeof res[synergy] === "undefined") {
            res[synergy] = {
              id: asset.id,
              img: asset.img,
              step: asset.active.length,
              n: 0,
              active: 0,
              divider: 0
            };
          }
          res[synergy].n++;
          let step = res[synergy].step;
          let i = asset.active.findIndex(e => e > res[synergy].n);
          let active = i === -1 ? step : i;
          let divider =
            active === step ? asset.active[active - 1] : asset.active[active];

          res[synergy].active = active;
          res[synergy].divider = divider;
        });
      });

      // add blood demon effect
      if (
        typeof res[synergy.bloodDemon] !== "undefined" &&
        res[synergy.bloodDemon].active > 0
      ) {
        for (let synergy in res) {
          if (res[synergy].divider >= 4 && res[synergy].n >= 3) {
            res[synergy].n++;
          }
        }
      }

      // sort active synergies first
      let sortRes = [];
      for (let synergy in res) {
        sortRes.push(res[synergy]);
      }
      sortRes.sort((a, b) => b.active - a.active);
      return sortRes;
    }
  }
};
</script>
