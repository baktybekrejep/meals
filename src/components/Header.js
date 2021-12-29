import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")

    const changeInput = (e) => {
        setSearchInput(e.target.value.trim())

    }
    const search = () => {
        navigate(`/search/${searchInput}`)

    }
    const searchKeyDown = (e) => {
        if(e.key === "Enter") {
            navigate(`/search/${searchInput}`)
        }
      
    }
    return (
        <div>
            <div className="search-box">
                <input onKeyDown={searchKeyDown} onChange={changeInput} className="search-input" type="text"/>
             <button disabled={!searchInput} onClick={search} type="button">Найти</button>
                
            </div>
        </div>
    );
};

export default Header;