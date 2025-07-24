//Leaderboards, display top 12 hunters

import PlayerCard from "../components/playerCard"
import { Body_font, Title_font, Ui_font } from "../constants/fonts"
import { Player_details } from "../constants/player_details"

const Leaderboards = () => {
    return(
        <section className="bg-[#2B2B2B] py-10 lg:px-20">
           <header className="flex flex-col gap-10 lg:flex-row lg:items-center justify-between text-white text-center lg:text-start ">
                <div>
                    <h1 style={{...Title_font}} className="text-[#A259FF]">Top Hunters</h1>
                    <p style={{...Body_font}}>Step into the spotlight and showcase your skills to the world.</p>
                </div>
                <div>
                    <button style={{...Ui_font}} className="w-[250px] h-[55px] bg-transparent border border-purple-600 rounded-[20px] transition-all duration-[1s] hover:bg-[#A259FF] hover-border-purple-100">View Leaderboards</button>
                </div>
            </header>


            <div className="flex items-center justify-center h-full py-20">
                {/**card container */}
                <button className="flex flex-wrap gap-10 items-center justify-center lg:justify-start">
                    {Player_details.filter(player=>player.rank === "S").map((player)=>(
                        <PlayerCard key={player.id} {...player} />
                    ))}
                </button>
            </div>
        </section>
    )
}


export default Leaderboards