//Mission Constant List
//switch with API
import dungeon from '../assets/images/icedungeon.avif';
import dungeon2 from '../assets/images/dungeon2.webp';
import dungeon3 from '../assets/images/igrid.png'

export const missionList = [
    {
        id: 10,
        mission_title: "Crypt of Eternal Night",
        dungeon_level: "S",
        thumbnail: dungeon,
        earnings: "5200 coins",
        dungeon_creatures: "Undead Knights",
        boss_name: "Lord Erebus",
        recommended_level: "Level 55+",
        time_limit: "45 mins",
        reward_items: ["Erebus Fang", "Dark Soul Crystal", "XP Potion (Large)"],
        entry_fee: "200 coins",
        status: "Available",
        location: "Snowveil Mountains",
        danger_level: "Extreme",
        is_team_required: true,
        description: "A cursed crypt where light dares not enter. The undead rise endlessly, and the shadow of Erebus looms in every corner."
    },


    {
        id: 11,
        mission_title: "Trial Of The Weak",
        dungeon_level: "A",
        thumbnail: dungeon2,
        earnings: "2900 coins",
        dungeon_creatures: "Void Spiders",
        boss_name: "Arachnar, Queen of Shadows",
        recommended_level: "Level 48+",
        time_limit: "35 mins",
        reward_items: ["Venom Fang", "Void Silk", "XP Potion (Medium)"],
        entry_fee: "120 coins",
        status: "Available",
        location: "Obsidian Caverns",
        danger_level: "High",
        is_team_required: true,
        description: "Deep within the Obsidian Caverns lies Arachnar’s nest—a nightmare woven in darkness. No one enters without feeling the crawl of death on their skin."
    },


    {
        id: 12,
        mission_title: "The Red Knight",
        dungeon_level: "B",
        thumbnail: dungeon3,
        earnings: "1600 coins",
        dungeon_creatures: "Ice Revenants",
        boss_name: "Glacius the Frozen Tyrant",
        recommended_level: "Level 38+",
        time_limit: "30 mins",
        reward_items: ["Frozen Core", "Iceblade Fragment", "XP Potion (Small)"],
        entry_fee: "100 coins",
        status: "Available",
        location: "Demon Realm",
        danger_level: "Moderate",
        is_team_required: false,
        description: "A long-abandoned fortress haunted by vengeful spirits and ruled by a frost tyrant. The temperature alone could kill the unprepared."
    }
];