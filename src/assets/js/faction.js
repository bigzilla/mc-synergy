const faction = {
  elf: "Elf",
  westernDesert: "Western Desert",
  eruditio: "Eruditio",
  cyborg: "Cyborg",
  bloodDemon: "Blood Demon",
  dragonsAltar: "Dragons Altar",
  monasteryOfLight: "Monastery of Light",
  northernVale: "Northern Vale",
  abyss: "Abyss",
  celestial: "Celestial",
  empire: "Empire",
};

export default Object.freeze(faction);

export const factions = Object.freeze([
  {
    name: faction.elf,
    img: require("@/assets/img/faction_elf.png"),
  },
  {
    name: faction.westernDesert,
    img: require("@/assets/img/faction_western_desert.png"),
  },
  {
    name: faction.eruditio,
    img: require("@/assets/img/faction_eruditio.png"),
  },
  {
    name: faction.cyborg,
    img: require("@/assets/img/faction_cyborg.png"),
  },
  {
    name: faction.bloodDemon,
    img: require("@/assets/img/faction_blood_demon.png"),
  },
  {
    name: faction.dragonsAltar,
    img: require("@/assets/img/faction_dragons_altar.png"),
  },
  {
    name: faction.monasteryOfLight,
    img: require("@/assets/img/faction_monastery_of_light.png"),
  },
  {
    name: faction.northernVale,
    img: require("@/assets/img/faction_northern_vale.png"),
  },
  {
    name: faction.abyss,
    img: require("@/assets/img/faction_abyss.png"),
  },
  {
    name: faction.celestial,
    img: require("@/assets/img/faction_celestial.png"),
  },
  {
    name: faction.empire,
    img: require("@/assets/img/faction_empire.png"),
  },
]);
