import { Body_font, Title_font, Ui_font } from "../../constants/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import SoulSuckerScene from "../../animated_components/soulsucker";

// Images
import firesword from '../../assets/images/firesword.png';
import firesword_view2 from '../../assets/images/firesword_view2.png';
import firesword_view3 from '../../assets/images/firesword_view3.png';
import forest_weapon1 from '../../assets/images/forest_weapon1.png';
import forest_weapon2 from '../../assets/images/forest_weapon2.png';
import forest_weapon3 from '../../assets/images/forest_weapon3.png';
import fairy1 from '../../assets/images/magic_fairy1.png';
import fairy2 from '../../assets/images/magic_fairy2.png';
import fairy3 from '../../assets/images/magic_fairy3.png';
import Leaderboards from "../../sections/Leaderbords";
import Browsecategories from "../../sections/browseCategories";
import ItemCard from "../../components/item_card";
import Missions from "../../sections/missions";
import Star_mission from "../../sections/star_mission";
import SetupWallet from "../../sections/setupwallet";

const trendingItems = [
    {
        id: 1,
        title: "Soulfire Blade",
        type: 'Attack',
        attackType: "Fire Slash",
        range: "Short",
        isMelee: true,
        isTank: false,
        price: 1500,
        thumbnails: [firesword, firesword_view2, firesword_view3],
        bg: "#3B0764"
    },
    {
        id: 2,
        title: "Forest Sword",
        type: 'Range',
        attackType: "Nature Arc",
        range: "Medium",
        isMelee: false,
        isTank: false,
        price: 1250,
        thumbnails: [forest_weapon1, forest_weapon2, forest_weapon3],
        bg: "#1E3A8A"
    },
    {
        id: 3,
        title: "Ancient Fairy",
        type: 'Attack',
        attackType: "Magic Burst",
        range: "Long",
        isMelee: false,
        isTank: true,
        price: 3000,
        thumbnails: [fairy1, fairy2, fairy3],
        bg: "black"
    },
];

const StoreFront = () => {
   

    return (
        <div>
            {/* Hero Section */}
            <section
                style={{ ...Body_font }}
                className="min-h-screen bg-[#2B2B2B] text-white px-4 sm:px-8 lg:px-20 py-20 flex items-center"
            >
                <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-[1400px] mx-auto">
                    <header className="flex flex-col gap-8 max-w-xl">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            No Hunter Should Quest Empty-Handed — Shop Now.
                        </h1>
                        <p className="text-lg text-gray-300">
                            From ancient scrolls to god-tier gear — everything you need to dominate dungeons and rivals.
                        </p>
                        <button
                            style={{ ...Ui_font }}
                            className="flex gap-3 items-center justify-center bg-[#A259FF] h-[60px] w-full max-w-[220px] rounded-[20px] transition-all duration-300 hover:shadow-[0_0_15px_#A259FF]"
                        >
                            <FontAwesomeIcon icon={faWandMagicSparkles} />
                            Shop Now
                        </button>

                        <div className="flex justify-between items-center gap-4 pt-4">
                            {[
                                { id: 1, title: "Total Sale", value: "100B+" },
                                { id: 2, title: "Hunters", value: "200B+" },
                                { id: 3, title: "Auctions", value: "100K+" },
                            ].map((data) => (
                                <div key={data.id} className="flex flex-col gap-1">
                                    <h3 className="font-bold text-2xl lg:text-3xl">{data.value}</h3>
                                    <p className="text-sm text-gray-400">{data.title}</p>
                                </div>
                            ))}
                        </div>
                    </header>

                    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden">
                        <SoulSuckerScene />
                    </div>
                </div>
            </section>

            {/* Trending Collections */}
            <section className="px-4 sm:px-8 lg:px-20 bg-[#1E1E1E] text-white py-20 relative">
                <header className="mb-12 text-center lg:text-start">
                    <h1 style={{ ...Title_font }} className="text-3xl sm:text-4xl font-bold mb-2 text-[#A259FF]">
                        ✨ Trending Collections
                    </h1>
                    <p className="text-[18px] text-gray-300">
                        Explore our weekly updated gear — handpicked for elite hunters
                    </p>
                </header>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                    {trendingItems.map((item, index) => (
                        <ItemCard
                            key={index}
                            id={item.id}
                            title={item.title}
                            type={item.type}
                            attackType={item.attackType}
                            range={item.range}
                            isMelee={item.isMelee}
                            isTank={item.isTank}
                            price={item.price}
                            thumbnails={item.thumbnails}
                            bg={item.bg}
                         />
                    ))}
                </div>
            </section>
            <Leaderboards />
            <Browsecategories />
            <Missions />
            <Star_mission />
            <SetupWallet />
        </div>
    );
};

export default StoreFront;
