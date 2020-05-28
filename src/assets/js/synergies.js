let i = 0;
export const synergy = Object.freeze({
  /***** role *****/
  weaponMaster: i++,
  targeman: i++,
  marksman: i++,
  elementalist: i++,
  mage: i++,
  guardian: i++,
  summoner: i++,
  wrestler: i++,
  assassin: i++,

  /***** faction *****/
  elf: i++,
  westernDesert: i++,
  eruditio: i++,
  cyborg: i++,
  bloodDemon: i++,
  dragonsAltar: i++,
  monasteryOfLight: i++,
  northernVale: i++,
  abyss: i++,
  celestial: i++,
  empire: i++,
});

export const type = Object.freeze({
  role: "role",
  faction: "faction",
});

export default Object.freeze([
  /***** role *****/
  {
    id: synergy.weaponMaster,
    name: "Weapon Master",
    type: type.role,
    active: [3, 6],
    img: require("@/assets/img/role_weapon_master.png"),
  },
  {
    id: synergy.targeman,
    name: "Targeman",
    type: type.role,
    active: [2, 4],
    img: require("@/assets/img/role_targeman.png"),
  },
  {
    id: synergy.marksman,
    name: "Marksman",
    type: type.role,
    active: [3, 6],
    img: require("@/assets/img/role_marksman.png"),
  },
  {
    id: synergy.elementalist,
    name: "Elementalist",
    type: type.role,
    active: [2, 4],
    img: require("@/assets/img/role_elementalist.png"),
  },
  {
    id: synergy.mage,
    name: "Mage",
    type: type.role,
    active: [3, 6],
    img: require("@/assets/img/role_mage.png"),
  },
  {
    id: synergy.guardian,
    name: "Guardian",
    type: type.role,
    active: [3],
    img: require("@/assets/img/role_guardian.png"),
  },
  {
    id: synergy.summoner,
    name: "Summoner",
    type: type.role,
    active: [2, 4],
    img: require("@/assets/img/role_summoner.png"),
  },
  {
    id: synergy.wrestler,
    name: "Wrestler",
    type: type.role,
    active: [3, 6],
    img: require("@/assets/img/role_wrestler.png"),
  },
  {
    id: synergy.assassin,
    name: "Assassin",
    type: type.role,
    active: [3, 6],
    img: require("@/assets/img/role_assassin.png"),
  },

  /***** faction *****/
  {
    id: synergy.elf,
    name: "Elf",
    type: type.faction,
    active: [3, 6],
    img: require("@/assets/img/faction_elf.png"),
  },
  {
    id: synergy.westernDesert,
    name: "Western Desert",
    type: type.faction,
    active: [2, 4, 6],
    img: require("@/assets/img/faction_western_desert.png"),
  },
  {
    id: synergy.eruditio,
    name: "Eruditio",
    type: type.faction,
    active: [2],
    img: require("@/assets/img/faction_eruditio.png"),
  },
  {
    id: synergy.cyborg,
    name: "Cyborg",
    type: type.faction,
    active: [2, 4],
    img: require("@/assets/img/faction_cyborg.png"),
  },
  {
    id: synergy.bloodDemon,
    name: "Blood Demon",
    type: type.faction,
    active: [2],
    img: require("@/assets/img/faction_blood_demon.png"),
  },
  {
    id: synergy.dragonsAltar,
    name: "Dragons Altar",
    type: type.faction,
    active: [3, 6],
    img: require("@/assets/img/faction_dragons_altar.png"),
  },
  {
    id: synergy.monasteryOfLight,
    name: "Monastery of Light",
    type: type.faction,
    active: [2],
    img: require("@/assets/img/faction_monastery_of_light.png"),
  },
  {
    id: synergy.northernVale,
    name: "Northern Vale",
    type: type.faction,
    active: [3],
    img: require("@/assets/img/faction_northern_vale.png"),
  },
  {
    id: synergy.abyss,
    name: "Abyss",
    type: type.faction,
    active: [2, 4],
    img: require("@/assets/img/faction_abyss.png"),
  },
  {
    id: synergy.celestial,
    name: "Celestial",
    type: type.faction,
    active: [2, 4],
    img: require("@/assets/img/faction_celestial.png"),
  },
  {
    id: synergy.empire,
    name: "Empire",
    type: type.faction,
    active: [2, 4, 6],
    img: require("@/assets/img/faction_empire.png"),
  },
]);
