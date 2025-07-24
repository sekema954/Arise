import { useState } from "react";
import { Title_font } from "../constants/fonts";
import { ItemsCategories } from "../constants/items_categories";

const Browsecategories = () => {
  const [isHovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#1C1C1E] min-h-screen text-white px-4 lg:px-20 py-20">
      <header className="mb-12 flex flex-col gap-4 text-center lg:text-start">
        <h1 style={{ ...Title_font }} className="text-3xl md:text-5xl font-bold text-[#A259FF]">Browse Categories</h1>
        <p>Shop magical items by category</p>
      </header>
      <main className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
        {ItemsCategories.map((category) => (
            <a href={`/store/${category.title.toLowerCase()}`}>
                <button

                    key={category.id}
                    onMouseEnter={() => setHovered(category.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`w-[240px] h-[316px] flex flex-col border rounded-2xl overflow-hidden transition-all duration-300
                    ${isHovered === category.id 
                        ? 'border-purple-500 shadow-[0_0_20px_#A259FF] scale-105 opacity-100' 
                        : 'opacity-60 hover:opacity-100 hover:shadow-[0_0_12px_#7F5AF0]'}
                    `}
                >
                    <div className={`w-full h-[240px] flex items-center justify-center ${isHovered === category.id ? 'bg-[#4c2a85]/20' : 'bg-[#2E2E2E]'}`}>
                    <img className="w-[180px] h-[180px] object-contain" src={category.icon} alt={category.title} aria-label={category.title} />
                    </div>
                    <div className="bg-[#333] flex flex-1 items-center justify-center">
                    <p className="text-white text-lg font-semibold">{category.title}</p>
                    </div>
                </button>
          </a>
        ))}
      </main>
    </section>
  );
};

export default Browsecategories;
