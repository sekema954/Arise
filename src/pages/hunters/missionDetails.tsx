import { useParams } from "react-router-dom";
import { missionList } from "../../constants/missions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const MissionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dungeon = missionList.find((d) => d.id.toString() === id);

  if (!dungeon) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold text-red-500">Dungeon Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a001a] to-[#150020] text-purple-100 px-4 py-10">
        <a href="/">
            <button className="flex items-center justify-center gap-3 transition-all duration-[1s] hover:shadow-[0_0_15px_#A259FF] px-4 py-2">
                <FontAwesomeIcon icon={faCaretLeft} />
                Back
            </button>
        </a>
      <div className="max-w-5xl mx-auto border border-purple-700 rounded-3xl overflow-hidden shadow-xl shadow-purple-900/40">
        
        {/* Header Image */}
        <div className="h-[300px] w-full overflow-hidden">
          <img
            src={dungeon.thumbnail}
            alt={dungeon.mission_title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="p-8 space-y-6 bg-[#0f001f]">
          <h1 className="text-3xl font-bold text-purple-300">
            {dungeon.mission_title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-purple-800 px-3 py-1 rounded-full">
              Rank: {dungeon.dungeon_level}
            </span>
            <span className="bg-emerald-800 px-3 py-1 rounded-full">
              💰 {dungeon.earnings}
            </span>
            <span className="bg-pink-800 px-3 py-1 rounded-full">
              📍 {dungeon.location}
            </span>
            <span className="bg-red-800 px-3 py-1 rounded-full">
              ⚠ {dungeon.danger_level}
            </span>
            <span className="bg-purple-700 px-3 py-1 rounded-full">
              Entry Fee: {dungeon.entry_fee}
            </span>
            <span className="bg-indigo-800 px-3 py-1 rounded-full">
              Time Limit: {dungeon.time_limit}
            </span>
          </div>

          {/* Description */}
          <p className="text-purple-200 text-lg leading-relaxed">{dungeon.description}</p>

          {/* Extras */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm text-purple-300">
            <div>
              <strong>Boss:</strong> {dungeon.boss_name}
            </div>
            <div>
              <strong>Creatures:</strong> {dungeon.dungeon_creatures}
            </div>
            <div>
              <strong>Recommended Level:</strong> {dungeon.recommended_level}
            </div>
            <div>
              <strong>Team Required:</strong>{" "}
              {dungeon.is_team_required ? "Yes" : "No"}
            </div>
            <div className="col-span-2">
              <strong>Rewards:</strong>{" "}
              {dungeon.reward_items.length > 0
                ? dungeon.reward_items.join(", ")
                : "Unknown"}
            </div>
          </div>

          <button className="mt-8 bg-purple-700 hover:bg-purple-600 text-white py-3 px-6 rounded-xl shadow-lg transition">
            Accept Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionDetails;
