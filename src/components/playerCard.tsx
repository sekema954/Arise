interface PlayerProp {
    
        id: number;
        username: string;
        avatar: string;
        playerClass: string;
        rank: string;
        guild: string;
        online_status: string;
        age: number;
        gender: string;
        dungeonsCleared: number;
        followers: number;
        following: number;
        inventory: string[];
    } 
  
  const PlayerCard = ({
    id,
    username,
    avatar,
    playerClass,
    rank,
    guild,
    online_status,
  }: PlayerProp) => {
  
    return (
      <a
        href={`/player/${id}`}
        className="w-full max-w-xs transition-transform transform hover:scale-105"
      >
        <button
          className={`violet-gradient rounded-3xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300`}
        >
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={avatar}
                alt={username}
                className="w-24 h-24 rounded-full border-4 border-[#FFD700] hover:scale-110 transition-all duration-300"
              />
              <span
                className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-[#1e1e1e] ${
                  online_status === "online" ? "bg-green-500 ring-2 ring-green-400" : "bg-red-500 ring-2 ring-gray-400"
                }`}
              ></span>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold">{username}</h3>
              <p className="text-sm text-gray-400">{guild ? `Guild: ${guild}` : "No Guild"}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-sm text-gray-300">
            <p><span className="font-semibold text-[#FF6600]">Class:</span> {playerClass || "Unknown Class"}</p>
            <p><span className="font-semibold text-[#FF6600]">Rank:</span> {rank}</p>
          </div>
        </button>
      </a>
    );
  };
  
  export default PlayerCard;
  