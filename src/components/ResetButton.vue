<template>
  <v-card class="d-flex justify-center" color="rgba(0, 0, 0, 0)" flat>
    <v-btn x-large fab color="red" class="text-capitalize" @click="$emit('reset')">Reset</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ResetButton"
};
</script>