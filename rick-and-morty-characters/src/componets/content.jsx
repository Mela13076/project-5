import Filter from "./filter"
import CharacterInfo from "./characterInfo"
import { useEffect, useState } from "react";
import Dashboard from "./dashboard";

function Content(){
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
        try {
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
          <div className="dash-sec">
            <Dashboard filteredCharacters={filteredCharacters}/>
          </div>
          <div className="graph-sec">
            <h2>The Graphs Will Go Here</h2>
          </div>
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
