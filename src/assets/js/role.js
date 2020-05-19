const role = {
  weaponMaster: "Weapon Master",
  targeman: "Targeman",
  marksman: "Marksman",
  elementalist: "Elementalist",
  mage: "Mage",
  guardian: "Guardian",
  summoner: "Summoner",
  wrestler: "Wrestler",
  assassin: "Assassin",
};

export default Object.freeze(role);

export const roles = Object.freeze([
  {
    name: role.weaponMaster,
    img: require("@/assets/img/role_weapon_master.png"),
  },
  {
    name: role.targeman,
    img: require("@/assets/img/role_targeman.png"),
  },
  {
    name: role.marksman,
    img: require("@/assets/img/role_marksman.png"),
  },
  {
    name: role.elementalist,
    img: require("@/assets/img/role_elementalist.png"),
  },
  {
    name: role.mage,
    img: require("@/assets/img/role_mage.png"),
  },
  {
    name: role.guardian,
    img: require("@/assets/img/role_guardian.png"),
  },
  {
    name: role.summoner,
    img: require("@/assets/img/role_summoner.png"),
  },
  {
    name: role.wrestler,
    img: require("@/assets/img/role_wrestler.png"),
  },
  {
    name: role.assassin,
    img: require("@/assets/img/role_assassin.png"),
  },
]);
