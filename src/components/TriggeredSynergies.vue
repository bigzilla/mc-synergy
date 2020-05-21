<template>
  <v-container>
    <v-row>
      <v-col v-for="synergy in triggeredSynergies" :key="synergy.id" cols="1">
        <v-avatar size="32">
          <v-img
            :src="synergy.img"
            alt="role"
            :gradient="
              synergy.active
                ? ''
                : 'to top right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)'
            "
          ></v-img>
        </v-avatar>
        {{ synergy.n }}/{{ synergy.divider }} ({{ synergy.step }})
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
              divider: 0,
              active: false
            };
          }
          res[synergy].n++;
          let divider = asset.active.find(e => e > res[synergy].n);
          res[synergy].divider =
            typeof divider === "undefined"
              ? asset.active[asset.active.length - 1]
              : divider;
          res[synergy].active =
            typeof divider === "undefined" || res[synergy].n >= asset.active[0]
              ? true
              : false;
        });
      });

      // add blood demon effect
      if (
        typeof res[synergy.bloodDemon] !== "undefined" &&
        res[synergy.bloodDemon].active
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
