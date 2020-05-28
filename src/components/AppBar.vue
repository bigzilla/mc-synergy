<template>
  <v-app-bar color="grey" dense app>
    <v-spacer></v-spacer>
    <v-tooltip bottom v-for="(social, i) in socials" :key="i">
      <template v-slot:activator="{on}">
        <v-btn icon v-on="on" target="_blank" :href="social.link">
          <v-icon>{{social.icon}}</v-icon>
        </v-btn>
      </template>
      <span>{{social.tooltip}}</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    socials: [
      {
        link: "https://youtube.com/channel/UCruYoRD0VdY9Mruf9ox6JrQ",
        icon: "mdi-youtube",
        tooltip: "View me on Youtube"
      },
      {
        link: "https://instagram.com/m.billyzaelani",
        icon: "mdi-instagram",
        tooltip: "View me on Instagram"
      },
      {
        link: "https://github.com/billyzaelani/mc-synergy",
        icon: "mdi-github",
        tooltip: "View me on Github"
      }
    ]
  })
};
</script>