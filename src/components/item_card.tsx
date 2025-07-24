import { useState } from "react";
import { Ui_font } from "../constants/fonts";
import coin from '../assets/images/goldcoin.png';
import AddToCartButton from "./add_to_card";

interface ItemCardProp {
  id: number;
  title: string;
  type: string;
  attackType: string;
  range: string;
  isMelee: boolean;
  isTank: boolean;
  price: number;
  thumbnails: string[];
  bg: string;
}

const ItemCard = ({ id, title, type, attackType, range, isMelee, isTank, price, thumbnails, bg }: ItemCardProp) => {
  const [activeThumb, setActiveThumb] = useState<number>(0);

  return (
    <div key={id} style={{ backgroundColor: bg }} className="w-[320px] border border-[#333] rounded-[20px] overflow-hidden shadow-lg hover:shadow-[0_0_25px_#A259FF]/50 transition-all duration-300">
      <div className="w-full h-[300px]">
        <img src={thumbnails[activeThumb]} alt={title} className="w-full h-full object-contain rounded-t-[20px]" />
      </div>
      <div className="px-10 py-4 flex flex-col gap-4">
        <div className="flex flex-col">
          <h2 style={{ ...Ui_font }} className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-400">{type} • {attackType}</p>
        </div>
        <ul className="text-sm text-gray-300 space-y-1">
          <li><span className="text-white font-semibold">Range:</span> {range}</li>
          <li><span className="text-white font-semibold">Melee:</span> {isMelee === true ? "Yes" : "No"}</li>
          <li><span className="text-white font-semibold">Tank:</span> {isTank === true ? "Yes" : "No"}</li>
        </ul>
        <div className="text-xl font-bold text-[#A259FF] flex items-center">
          <img className="w-5 h-5 mr-1" src={coin} alt="Gold Coin" />{price.toLocaleString()}
        </div>
        <AddToCartButton />
        <div className="flex items-center justify-center gap-3 pt-4">
          {thumbnails.map((thumb, index) => (
            <button key={index} onClick={() => setActiveThumb(index)} className={`w-[60px] h-[60px] rounded-[12px] overflow-hidden border-2 ${activeThumb === index ? "border-[#A259FF]" : "border-transparent"} transition-all duration-300 ring-1 ring-[#333]`}>
              <img src={thumb} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
