<template>
  <v-dialog :value="dialog" @click:outside="closeDialog()" width="290">
    <v-card>
      <v-container>
        <v-row>
          <v-col v-for="crystal in crystals" :key="crystal.id" cols="4" class="text-center">
            <v-btn icon>
              <v-avatar>
                <v-img
                  :src="crystal.img"
                  alt="crystal"
                  @click="$emit('add-crystal', crystal.id), closeDialog()"
                ></v-img>
              </v-avatar>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="red"
          class="text-capitalize"
          @click="$emit('remove-crystal'), closeDialog()"
        >Remove</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import crystals from "../assets/js/crystals";

export default {
  name: "ItemPool",
  data: () => ({
    crystals: crystals
  }),
  props: ["dialog"],
  model: {
    prop: "dialog",
    event: "toggle"
  },
  methods: {
    closeDialog() {
      this.$emit("toggle", false);
    }
  }
};
</script>