"use client";
import { CardBody, CardContainer, CardItem } from "../aceternity/ui/3d-card";

interface missionProp {
  id: number;
  mission_title: string;
  dungeon_level: string;
  thumbnail: string;
  earnings: string;
  location: string;
  danger_level: string;
  description: string;
}

const MissionCard = ({
  id,
  mission_title,
  dungeon_level,
  thumbnail,
  earnings,
  location,
  danger_level,
  description,
}: missionProp) => {
  const cutDescription =
    description.length > 60 ? description.slice(0, 60) + "..." : description;

  return (
    <CardContainer className="inter-var w-full sm:w-[360px] h-[600px]">
      <CardBody className="bg-gradient-to-br from-[#1a001f] to-[#2b0033] relative group/card border border-purple-900/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 p-4 flex flex-col">
        
        {/* Thumbnail */}
        <CardItem translateZ="60" className="h-[220px] relative w-full">
        <img
          src={thumbnail}
          alt={mission_title}
          height={1000}
          width={1000}
          className="h-60 w-full object-cover rounded-xl transition-transform duration-500 ease-in-out will-change-transform group-hover/card:scale-105 group-hover/card:shadow-2xl"
        />

          <div className="absolute top-3 left-3 bg-purple-900/80 px-3 py-1 text-xs text-purple-200 rounded-full uppercase tracking-wider font-semibold shadow">
            Rank {dungeon_level}
          </div>
        </CardItem>

        {/* Info */}
        <CardItem translateZ="40" className="flex flex-col gap-2 mt-4 text-purple-100 w-full py-5">
          <h2 className="text-xl font-bold text-purple-300">{mission_title}</h2>
          <div className="flex justify-between text-sm">
            <span className="text-purple-400">📍 {location}</span>
            <span className="text-red-400">⚠ {danger_level}</span>
          </div>
        </CardItem>

        {/* Description */}
        <CardItem translateZ="30" className="text-sm mt-2 text-purple-200">
          {cutDescription}
        </CardItem>

        {/* Earnings */}
        <CardItem translateZ="30" className="mt-2 text-md font-semibold text-emerald-400">
          💰 {earnings}
        </CardItem>

        {/* Button */}
        <div className="mt-auto w-full">
          <CardItem
            translateZ="20"
            as="a"
            href={`/mission_details/${id}`}
            className="block mt-4"
          >
            <CardItem
              as="button"
              className="w-full px-4 h-[45px] bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition duration-500"
            >
              View Mission
            </CardItem>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default MissionCard;
