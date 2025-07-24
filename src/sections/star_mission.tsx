import DemonKingScene from "../animated_components/demonKing";

const Star_mission = () => {
  return (
    <section className="min-h-[700px] py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#2e0500] via-[#8b1e00] to-[#ff5e00] relative overflow-hidden text-white">
      {/* Timer */}
      <div className="w-[90%] max-w-[320px] h-[140px] bg-[#604682]/50 rounded-xl z-10 absolute top-6 right-4 sm:right-8 md:right-10">
        <div className="flex flex-col gap-4 px-6 py-4">
          <p className="text-sm">Bonus ends in:</p>
          <div className="flex items-center justify-between">
            {[
              { id: 1, title: "Hours", value: 59 },
              { id: 2, title: "Minutes", value: 59 },
              { id: 3, title: "Seconds", value: 59 },
            ].map((time, index, array) => (
              <div key={time.id} className="flex flex-col items-center gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-purple-200">
                  {time.value.toString().padStart(2, '0')}
                  {index < array.length - 1 && <span className="mx-1 sm:mx-2">:</span>}
                </span>
                <span className="text-xs sm:text-sm text-purple-400">{time.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Model Canvas */}
      <div className="absolute inset-0 z-0">
        <DemonKingScene />
        <div className="absolute inset-0 bg-purple-500/20 blur-[120px] z-[-1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0 h-full mt-16 md:mt-0">
        
        {/* Text Box */}
        <div className="w-full md:max-w-lg space-y-6 backdrop-blur-xl bg-white/5 p-6 sm:p-8 rounded-3xl border border-purple-500 shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-300">
            Featured Dungeon: Demon King's Keep
          </h1>
          <p className="text-purple-200 text-base sm:text-lg">
            The most feared dungeon of all. Only S-Rank hunters have returned alive. Riches beyond imagination await... if you survive.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-purple-100">
            <span className="bg-purple-800 px-3 py-1 rounded-full">💰 1.2M Gold</span>
            <span className="bg-red-700 px-3 py-1 rounded-full">⚠ S-Rank Danger</span>
            <span className="bg-emerald-700 px-3 py-1 rounded-full">🧿 Boss: Demon King</span>
            <span className="bg-indigo-700 px-3 py-1 rounded-full">🕐 Time Limit: 1hr</span>
          </div>

          <button className="w-full sm:w-auto mt-4 px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition">
            Accept Mission
          </button>
        </div>

        {/* Spacer for canvas on desktop */}
        <div className="w-full md:w-[45%] h-[300px] md:h-auto" />
      </div>
    </section>
  );
};

export default Star_mission;
