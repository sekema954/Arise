import golem from '../assets/images/golem.png';
import golem2 from '../assets/images/golem2.png';
import golem3 from '../assets/images/golem3.png';
import firesword from '../assets/images/firesword.png';
import firesword2 from '../assets/images/firesword_view2.png';
import firesword3 from '../assets/images/firesword_view3.png';
import wand from '../assets/images/wand.png';
import wand2 from '../assets/images/wand2.png';
import wand3 from '../assets/images/wand3.png';
import dagger from '../assets/images/dagger.png';
import dagger2 from '../assets/images/dagger2.png';
import dagger3 from '../assets/images/dagger3.png';
import shield from '../assets/images/shield.png';
import shield2 from '../assets/images/shield2.png';
import shield3 from '../assets/images/shield3.png';
import bow from '../assets/images/arrow.png';
import bow2 from '../assets/images/arrow2.png';
import bow3 from '../assets/images/arrow3.png';
import armor from '../assets/images/armor.png';
import armor2 from '../assets/images/armor2.png';
import armor3 from '../assets/images/armor3.png';
import griffin from '../assets/images/griffin.png';
import griffin2 from '../assets/images/griffin2.png';
import griffin3 from '../assets/images/griffin3.png';
import dragon from '../assets/images/dragon.png';
import dragon2 from '../assets/images/dragon2.png';
import dragon3 from '../assets/images/dragon3.png';
import light_fairy from '../assets/images/magic_fairy1.png'
import light_fairy2 from '../assets/images/magic_fairy2.png'
import light_fairy3 from '../assets/images/magic_fairy3.png'
import soul from '../assets/images/soul_dagger.png';
import soul2 from '../assets/images/soul_dagger2.png';
import soul3 from '../assets/images/soul_dagger3.png';
import whip from '../assets/images/whip.png';
import whip2 from '../assets/images/whip2.png';
import whip3 from '../assets/images/whip3.png';
import axe from '../assets/images/axe.png';
import axe2 from '../assets/images/axe2.png';
import axe3 from '../assets/images/axe3.png';


export const magic_store_items = [
  {
    id: 1,
    title: "Blade of the Sea",
    type: "Attack",
    attackType: "Fire Slash",
    range: "Short",
    isMelee: true,
    isTank: false,
    price: 1500,
    thumbnails: [firesword, firesword2, firesword3],
    bg: "#3B0764",
    category: "Swords"
  },
  {
    id: 3,
    title: "Shadowfang Dagger",
    type: "Stealth",
    attackType: "Backstab",
    range: "Short",
    isMelee: true,
    isTank: false,
    price: 1700,
    thumbnails: [dagger, dagger2, dagger3],
    bg: "#6A7055",
    category: "Daggers"
  },
  {
    id: 4,
    title: "Titan Shield",
    type: "Defense",
    attackType: "Shield Bash",
    range: "Medium",
    isMelee: true,
    isTank: true,
    price: 2500,
    thumbnails: [shield, shield2, shield3],
    bg: "#3E2D19",
    category: "Shields"
  },
  {
    id: 5,
    title: "Stormcaller Staff",
    type: "Magic",
    attackType: "Lightning Strike",
    range: "Long",
    isMelee: false,
    isTank: false,
    price: 2100,
    thumbnails: [wand, wand2, wand3],
    bg: "#1E3A8A",
    category: "Magic Staffs"
  },
  {
    id: 6,
    title: "Iron Juggernaut Armor",
    type: "Defense",
    attackType: "Body Slam",
    range: "Close",
    isMelee: true,
    isTank: true,
    price: 3000,
    thumbnails: [armor, armor2, armor3],
    bg: "#3A3A3C",
    category: "Shields" 
  },
  {
    id: 7,
    title: "Ice Whip",
    type: "Ice",
    attackType: "Freeze Lash",
    range: "Medium",
    isMelee: true,
    isTank: false,
    price: 1800,
    thumbnails: [whip, whip2 , whip3],
    bg: "#3A456A",
    category: "Fist Weapons" // Closest match for whip-style weapon
  },
  {
    id: 8,
    title: "Phoenix Bow",
    type: "Ranged",
    attackType: "Flame Arrow",
    range: "Long",
    isMelee: false,
    isTank: false,
    price: 2000,
    thumbnails: [bow, bow2, bow3],
    bg: "#7C2D12",
    category: "Bows"
  },
  {
    id: 9,
    title: "Soul Dagger",
    type: "Stealth",
    attackType: "Fade Strike",
    range: "Close",
    isMelee: false,
    isTank: false,
    price: 1600,
    thumbnails: [soul, soul2, soul3],
    bg: "#9B9061",
    category: "Daggers"
  },
  {
    id: 10,
    title: "Dragonbone Axe",
    type: "Attack",
    attackType: "Heavy Cleave",
    range: "Short",
    isMelee: true,
    isTank: false,
    price: 2400,
    thumbnails: [axe, axe2, axe3],
    bg: "#7F1D1D",
    category: "Swords" 
  },
  {
    id: 11,
    title: "Mystic Fairy",
    type: "Creature",
    attackType: "Charm Pulse",
    range: "Medium",
    isMelee: false,
    isTank: false,
    price: 2700,
    thumbnails: [light_fairy, light_fairy2, light_fairy3],
    bg: "#8C5C3C",
    category: "Holy Relics"
  },
  {
    id: 12,
    title: "Elder Dragon",
    type: "Beast",
    attackType: "Inferno Breath",
    range: "Long",
    isMelee: true,
    isTank: true,
    price: 5000,
    thumbnails: [dragon, dragon2, dragon3],
    bg: "purple",
    category: "Swords" 
  },
  {
    id: 13,
    title: "Celestial Griffin",
    type: "Beast",
    attackType: "Sky Claw",
    range: "Long",
    isMelee: true,
    isTank: false,
    price: 3800,
    thumbnails: [griffin, griffin2, griffin3],
    bg: "#5B21B6",
    category: "Holy Relics" 
  },
  {
    id: 14,
    title: "Enchanted Golem",
    type: "Summon",
    attackType: "Stone Fist",
    range: "Close",
    isMelee: true,
    isTank: true,
    price: 3300,
    thumbnails: [golem, golem2, golem3],
    bg: "#4B5563",
    category: "Holy Relics"
  }
];
