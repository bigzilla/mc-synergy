import { synergy } from "./synergies";

let i = 0;
export const crystal = Object.freeze({
  marksman: i++,
  assassin: i++,
  dragonsAltar: i++,
  elf: i++,
  wrestlers: i++,
  empire: i++,
});

export default Object.freeze([
  {
    id: crystal.marksman,
    name: "Marksman Crystal",
    synergy: synergy.marksman,
    img: require("@/assets/img/item_marksman_crystal.png"),
  },
  {
    id: crystal.assassin,
    name: "Assassin Crystal",
    synergy: synergy.assassin,
    img: require("@/assets/img/item_assassin_crystal.png"),
  },
  {
    id: crystal.dragonsAltar,
    name: "Dragons Altar Crystal",
    synergy: synergy.dragonsAltar,
    img: require("@/assets/img/item_dragons_altar_crystal.png"),
  },
  {
    id: crystal.elf,
    name: "Elf Crystal",
    synergy: synergy.elf,
    img: require("@/assets/img/item_elf_crystal.png"),
  },
  {
    id: crystal.wrestlers,
    name: "Wrestlers Crystal",
    synergy: synergy.wrestler,
    img: require("@/assets/img/item_wrestlers_crystal.png"),
  },
  {
    id: crystal.empire,
    name: "Empire Crystal",
    synergy: synergy.empire,
    img: require("@/assets/img/item_empire_crystal.png"),
  },
]);
