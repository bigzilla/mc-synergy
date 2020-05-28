<template>
  <v-card>
    <v-container>
      <v-row dense>
        <v-col v-for="synergy in triggeredSynergies" :key="synergy.id" cols="3">
          <v-card class="d-flex flex-column justify-center" color="rgba(0, 0, 0, 0)" flat>
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
  </v-card>
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
      let uniqueDeck = {};
      this.deck.forEach(h => {
        if (h === null) {
          return;
        }

        if (typeof uniqueDeck[h.id] === "undefined") {
          uniqueDeck[h.id] = { ...h };
        } else {
          uniqueDeck[h.id].items = uniqueDeck[h.id].items.concat(h.items);
        }
      });

      for (let id in uniqueDeck) {
        let h = uniqueDeck[id];
        let items = [];
        h.items.forEach(item => {
          if (item !== null) {
            items.push(item.synergy);
          }
        });
        let arrSynergies = new Set([...h.synergies, ...items]);
        arrSynergies.forEach(synergy => {
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
      }

      // add blood demon effect
      if (
        typeof res[synergy.bloodDemon] !== "undefined" &&
        res[synergy.bloodDemon].active > 0
      ) {
        for (let synergy in res) {
          let n = res[synergy].n;
          let divider = res[synergy].divider;
          if (divider >= 4 && n >= 3) {
            res[synergy].n++;
            if (n + 1 >= divider) {
              res[synergy].active++;
            }
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
