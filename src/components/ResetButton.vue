<template>
  <v-card class="d-flex justify-center align-center fill-height" color="transparent" flat>
    <v-btn x-large fab color="error" @click="$emit('reset')">Reset</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ResetButton"
};
</script>