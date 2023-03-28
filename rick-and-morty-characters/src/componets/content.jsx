import Filter from "./filter"
import CharacterInfo from "./characterInfo"
import { useEffect, useState } from "react";

function Content(){
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacters(data.results);
            setFilteredCharacters(data.results);
        } catch (error) {
            console.log(error);
        }
        
    }

    fetchData();
  }, []);

  const handleFilter = (filteredData) => {
    setFilteredCharacters(filteredData);
  };
    return(
        <div className="Body">
            <div className="top-content">
                {/* <Filter setFilteredCharacters={setFilteredCharacters}/> */}
                <Filter characters={characters} setFilteredCharacters={setFilteredCharacters} handleFilter={handleFilter}/>
            </div>
            <div className="bottom-content">
                <CharacterInfo data={filteredCharacters}/>
            </div>
      </div>
    )
}

export default Content
