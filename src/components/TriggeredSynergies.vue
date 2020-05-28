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
              :value="synergy.active/synergy.step.length*100"
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
  methods: {
    activeCount(n, step) {
      let i = step.findIndex(e => e > n);
      return i === -1 ? step.length : i;
    },
    divider(n, step) {
      let active = this.activeCount(n, step);
      return active === step.length ? step[active - 1] : step[active];
    }
  },
  computed: {
    triggeredSynergies() {
      // result of triggered synergies
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

      // count synergies
      for (let id in uniqueDeck) {
        let h = uniqueDeck[id];
        let items = [];
        h.items.forEach(item => {
          if (item !== null) {
            items.push(item.synergy);
          }
        });

        new Set([...h.synergies, ...items]).forEach(id => {
          if (typeof res[id] === "undefined") {
            let asset = synergies[id];
            res[id] = {
              id: asset.id,
              img: asset.img,
              step: asset.active,
              n: 0,
              active: 0,
              divider: 0
            };
          }
          let s = res[id];

          s.n++;
          s.active = this.activeCount(s.n, s.step);
          s.divider = this.divider(s.n, s.step);
        });
      }

      // add blood demon effect
      let bloodDemon = res[synergy.bloodDemon];
      if (typeof bloodDemon !== "undefined" && bloodDemon.active > 0) {
        for (let id in res) {
          let s = res[id];
          if (s.divider >= 4 && s.n >= 3) {
            s.n++;
            if (s.n + 1 >= s.divider) {
              s.active = this.activeCount(s.n, s.step);
              s.divider = this.divider(s.n, s.step);
            }
          }
        }
      }

      // sort active synergies first
      let sortRes = [];
      for (let id in res) {
        sortRes.push(res[id]);
      }
      sortRes.sort((a, b) => b.active - a.active);
      return sortRes;
    }
  }
};
</script>
