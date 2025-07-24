//Missions

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Title_font } from "../constants/fonts"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { missionList } from "../constants/missions"
import MissionCard from "../components/missionCard"

const Missions = () => {
    return(
        <section className="py-20 lg:px-20 px-5 bg-[#2B2B2B] text-white">
            <header className="flex items-center flex-col lg:flex-row gap-6 lg:justify-between text-center lg:text-start">
                <div className="flex flex-col gap-2">
                    <h1 style={{...Title_font}} className="text-[#A259FF] leading-[50px]">Your Mission Awaits</h1>
                    <p>Clear dungeons. Earn rewards. Rise through the hunter ranks.</p>
                </div>
                {/**CTA button */}
                <button className="flex items-center justify-center gap-5 border border-[#A259FF] w-[170px] h-[55px] rounded-lg transition-all duration-[1s] hover:bg-[#A259FF]">
                    <FontAwesomeIcon icon={faEye} />
                    See All
                </button>
            </header>
            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-4">
                {missionList.map((mission)=>(
                    <MissionCard
                    key={mission.id}
                    id={mission.id}
                    mission_title={mission.mission_title}
                    dungeon_level={mission.dungeon_level}
                    thumbnail={mission.thumbnail}
                    earnings={mission.earnings}
                    location={mission.location}
                    danger_level={mission.danger_level}
                    description={mission.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Missions