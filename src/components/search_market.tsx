//Search input 

import React, { useState } from "react";

interface searchInputProps {
    onSearch: (value: string) => void;
}

const SearchInput = ({onSearch}: searchInputProps) => {
    const [searchValue, setSearchValue] = useState<string>("");


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSearchValue(e.target.value);
    };


    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        onSearch(searchValue);
    }
    return(
        <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap">
            <input placeholder="Search Items" value={searchValue} onChange={handleChange} className="border border-white flex-1 h-[60px] rounded-xl px-10 text-[##616160]" type="text" name="" id="" />
            <button className="bg-[#A259FF] hover:bg-[#8a41e6] transition-colors duration-200 text-white py-2 px-6 rounded-xl font-semibold">Search</button>
        </form>
    )
}

export default SearchInput