import React, { useState } from 'react';

function Filter(props){
    const { characters, setFilteredCharacters } = props;
    const [filters, setFilters] = useState([{ type: 'name', query: '' }]);

    // Filter the data based on the query string and filter type
    const filterData = () => {
        const filteredData = characters.filter((row) => {
            for (let i = 0; i < filters.length; i++) {
                const filter = filters[i];
                const queryStr = filter.query.trim().toLowerCase();

                if (filter.type === 'name' && !row.name.toLowerCase().includes(queryStr)) {
                    return false;
                } else if (filter.type === 'status' && !row.status.toLowerCase().includes(queryStr)) {
                    return false;
                } else if (filter.type === 'species' && !row.species.toLowerCase().includes(queryStr)) {
                    return false;
                } else if (filter.type === 'location' && !row.location.name.toLowerCase().includes(queryStr)) {
                    return false;
                }
            }
            return true; // All filters passed
        });
        setFilteredCharacters(filteredData);
    };

    // Add a new filter
    const addFilter = () => {
        setFilters([...filters, { type: 'name', query: '' }]);
    };

    // Remove a filter by index
    const removeFilter = (index) => {
        const newFilters = [...filters];
        newFilters.splice(index, 1);
        setFilters(newFilters);
    };

    return(
        <div className='filterSection'>
            {filters.map((filter, index) => (
                <div key={index}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={filter.query} 
                        onChange={(e) => {
                            const newFilters = [...filters];
                            newFilters[index] = { ...filter, query: e.target.value };
                            setFilters(newFilters);
                            filterData(); // Filter the data dynamically
                        }} 
                    />

                    <select 
                        value={filter.type} 
                        onChange={(e) => {
                            const newFilters = [...filters];
                            newFilters[index] = { ...filter, type: e.target.value };
                            setFilters(newFilters);
                            filterData(); // Filter the data dynamically
                        }}
                    >
                        <option value="name">Name</option>
                        <option value="status">Status</option>
                        <option value="species">Species</option>
                        <option value="location">Location</option>
                    </select>

                    <button onClick={() => removeFilter(index)}>X</button>
                </div>
            ))}
            
            <button onClick={addFilter}>Add filter</button>
            <button onClick={filterData}>Filter</button>
            <button onClick={() => {setFilteredCharacters(characters); setFilters([{ type: 'name', query: '' }]);}}>Reset</button>
        </div>
    )
}


export default Filter