import { useParams } from "react-router-dom";
import { Player_details } from "../../constants/player_details";
import { useState } from "react";
import { lazy, Suspense } from 'react';

function PlayerDetails() {
  const { id } = useParams<{ id: string }>();
  const player = Player_details.find((p) => p.id.toString() === id);
  const [isFollowing, setIsFollowing] = useState(false);
  const Character1 = lazy (()=>import("../../animated_components/character1"));

  if (!player) {
    return <p className="text-center text-red-500 mt-10 text-xl">Player Not Found</p>;
  }

  const {
    username,
    avatar,
    playerClass,
    rank,
    guild,
    online_status,
    age,
    gender,
    dungeonsCleared,
    followers,
    following,
    inventory,
  } = player;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white px-4 py-10 md:px-20">
        <a href="/">
            <button className="px-2 transition-all duration-[1s] hover:shadow-[0_0_15px_#A259FF]" >Back</button>
        </a>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Player Animation */}
        <div className="relative w-full h-[500px] md:h-[650px] bg-gradient-to-tr from-[#0a0a0a] via-[#1a0f1f] to-[#000000] rounded-xl shadow-2xl overflow-hidden">
            {/** *
            <Suspense fallback={<div className="text-white text-lg font-medium">Loading...</div>}>
                <Character1 />
            </Suspense>
            **/}

        </div>


        {/* RIGHT: Player Info */}
        <div className="bg-[#1e1e1e] p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-yellow-400">{username}</h1>
            <span className={`w-3 h-3 rounded-full ${online_status === "online" ? "bg-green-500" : "bg-red-500"}`}></span>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-purple-700 px-3 py-1 rounded-full">Class: {playerClass}</span>
            <span className="bg-pink-700 px-3 py-1 rounded-full">Rank: {rank}</span>
            <span className="bg-indigo-700 px-3 py-1 rounded-full">Guild: {guild || "None"}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm md:text-base mt-4 text-gray-300">
            <p><span className="text-gray-400">Age:</span> {age}</p>
            <p><span className="text-gray-400">Gender:</span> {gender}</p>
            <p><span className="text-gray-400">Dungeons Cleared:</span> {dungeonsCleared}</p>
            <p><span className="text-gray-400">Followers:</span> {followers}</p>
            <p><span className="text-gray-400">Following:</span> {following}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-yellow-400 mt-4 mb-2 border-b border-yellow-500 pb-1">Inventory</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-200">
              {inventory?.length > 0 ? (
                inventory.map((item: string, index: number) => (
                  <li key={index} className="bg-[#2a2a2a] p-2 rounded-lg shadow-sm hover:bg-[#333] transition">{item}</li>
                ))
              ) : (
                <li>No Items</li>
              )}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6">
            <button
              onClick={() => setIsFollowing(true)}
              disabled={isFollowing}
              className={`py-2 px-4 rounded-lg transition text-sm ${
                isFollowing ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button
              onClick={() => setIsFollowing(false)}
              disabled={!isFollowing}
              className={`py-2 px-4 rounded-lg transition text-sm ${
                !isFollowing ? "bg-gray-600 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              Unfollow
            </button>
            <button className="col-span-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition">
              Message
            </button>
            <button className="col-span-2 py-2 px-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm transition">
              Ask to Join Guild
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
