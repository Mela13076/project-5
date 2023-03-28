import Filter from "./filter"
import CharacterInfo from "./characterInfo"
import { useEffect, useState } from "react";

function Content(){
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
        try {
            // const response = await fetch('https://rickandmortyapi.com/api/character');
            // const data = await response.json();
            // setCharacters(data.results);
            // setFilteredCharacters(data.results);
            // const response1 = await fetch("https://rickandmortyapi.com/api/character");
            // const data1 = await response1.json();
            // const response2 = await fetch("https://rickandmortyapi.com/api/character?page=2");
            // const data2 = await response2.json();
            // const response3 = await fetch("https://rickandmortyapi.com/api/character?page=3");
            // const data3 = await response3.json();
            // const allCharacters = data1.results.concat(data2.results, data3.results);
            async function fetchAllCharacters() {
                let allCharacters = [];
                let page = 1;
                let response;
              
                do {
                  response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                  const { results } = await response.json();
                  allCharacters = allCharacters.concat(results);
                  page++;
                } while (page <= 42); //response.ok
              
                return allCharacters;
              }
              
              // Usage
              const allCharacters = await fetchAllCharacters();
            setCharacters(allCharacters);
            setFilteredCharacters(allCharacters);
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
