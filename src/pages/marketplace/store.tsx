import { useParams } from "react-router-dom"
import { Title_font } from "../../constants/fonts";
import SearchInput from "../../components/search_market";
import { magic_store_items } from "../../constants/marketitems";
import { useEffect, useState } from "react";
import ItemCard from "../../components/item_card";
import NoItemsFound from "../../components/item_not_found";

const Store = () => {
    const { category } = useParams<{ category: string }>();
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState(magic_store_items);
    const [searchCount, setSearchCount] = useState<number>(0);

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    useEffect(() => {
        if (searchValue.trim() !== "") {
            const results = magic_store_items.filter(item =>
                item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.category.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredItems(results);
            setSearchCount(results.length);
        } else if (category) {
            const results = magic_store_items.filter(item =>
                item.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredItems(results);
            setSearchCount(results.length);
        } else {
            setFilteredItems(magic_store_items);
            setSearchCount(magic_store_items.length);
        }
    }, [searchValue, category]);

    return (
        <section className="bg-[#2B2B2B] lg:px-20 px-6 py-20 text-white">
            <div className="flex flex-col gap-5">
                <header className="flex flex-col gap-1">
                    <h1 style={{ ...Title_font }}>Browse Marketplace</h1>
                    <p>Browse through more than 50k magic items on the Arise Marketplace</p>
                </header>
                <div>
                    <SearchInput onSearch={handleSearch} />
                </div>
                {searchValue && (
                    <div>
                        <p className="text-gray-400">
                            Showing {searchCount} results for <span className="text-white font-bold">{searchValue}</span>
                        </p>
                    </div>
                )}
            </div>

            {filteredItems.length > 0 ? (
                <div className="flex flex-wrap gap-5 py-16">
                    {filteredItems.map(product => (
                        <ItemCard
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            type={product.type}
                            attackType={product.attackType}
                            range={product.range}
                            isMelee={product.isMelee}
                            isTank={product.isTank}
                            price={product.price}
                            thumbnails={product.thumbnails}
                            bg={product.bg}
                        />
                    ))}
                </div>
            ) : (
                <NoItemsFound searchValue={searchValue || category || "this filter"} />
            )}

            <div className="flex gap-3 items-center justify-center">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <button key={idx} className="bg-[#A259FF] hover:bg-[#8a41e6] transition-colors duration-200 text-white py-2 px-4 rounded-xl font-semibold">{idx + 1}</button>
                ))}
            </div>
        </section>
    );
};

export default Store;
