import React, { useState } from 'react';

function Filter(props){
    const { characters, setFilteredCharacters } = props;
    const [filters, setFilters] = useState([{ type: 'name', query: '' }]);
    // console.log(characters)

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
                    <input type="text" placeholder="Search..." value={filter.query} onChange={(e) => {
                        const newFilters = [...filters];
                        newFilters[index] = { ...filter, query: e.target.value };
                        setFilters(newFilters);
                    }} />

                    <select value={filter.type} onChange={(e) => {
                        const newFilters = [...filters];
                        newFilters[index] = { ...filter, type: e.target.value };
                        setFilters(newFilters);
                    }}>
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

// import React, { useState } from 'react';

// function Filter(props){
//     const { characters, setFilteredCharacters } = props;
//     const [query, setQuery] = useState('');
//     const [filterType, setFilterType] = useState('name'); // Default filter type is Name

//     console.log(characters)
//   // Filter the data based on the query string and filter type
//     const filterData = () => {
//         const filteredData = characters.filter((row) => {
//             const queryStr = query.trim().toLowerCase();

//             if (filterType === 'name') {
//                 return row.name.toLowerCase().includes(queryStr);
//             } else if (filterType === 'status') {
//                 return row.status.toLowerCase().includes(queryStr);
//             } else if (filterType === 'species') {
//                 return row.species.toLowerCase().includes(queryStr);
//             } else if (filterType === 'location') {
//                 return row.location.name.toLowerCase().includes(queryStr);
//             } else {
//                 return true; // No filter type selected, return all rows
//             }
//         });
//         setFilteredCharacters(filteredData);
//     };

//     return(
//         <div className='filterSection'>
//             <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />

//             <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//                 <option value="name">Name</option>
//                 <option value="status">Status</option>
//                 <option value="species">Species</option>
//                 <option value="location">Location</option>
//             </select>

//             <button onClick={filterData}>Filter</button>
//             <button onClick={() => {setFilteredCharacters(characters); setQuery("")}}>Reset</button>
//         </div>
//     )
// }

// export default Filter

// function Filter(props){
//     const { data, setData } = props;
//     const [query, setQuery] = useState('');
//     const [filterType, setFilterType] = useState('id'); // Default filter type is ID

//   // Filter the data based on the query string and filter type
//     const filterData = () => {
//         const filteredData = data.filter((row) => {
//             const queryStr = query.trim().toLowerCase();

//                 if (filterType === 'pressure_id') {
//                     // Check for a match against the ID column
//                     return String(row.id).startsWith(parseInt(queryStr));
//                 } else if (filterType === 'date_collected') {
//                     const date = new Date(row.date); // Assuming the date is stored as a string in ISO format
//                     const queryDate = new Date(queryStr);
//                     // Check for a match against the date column or time column
//                     return date.toDateString() === queryDate.toDateString() || date.toLocaleTimeString().includes(queryStr);
//                 } else if (filterType === 'pressure_value'){
//                     return String(row.value).startsWith(parseInt(queryStr));
//                 }else if (filterType === 'tech_name') {
//                     // Check for a match against the name column
//                     return row.name.toLowerCase().includes(queryStr);
//                 } else if (filterType === 'serial_num') {
//                     // Check for a match against the email column
//                     return String(row.serial).startsWith(parseInt(queryStr));
//                 } else if (filterType === 'pass_fail'){
//                     return row.test.toLowerCase().includes(queryStr);
//                 }else {
//                     return true; // No filter type selected, return all rows
//                 }
//             }
//         );
//         setData(filteredData);
//     };
//     return(
//         <div className='filterSection'>
//             <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />

//             <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
//                 <option value="name">Name</option>
//                 <option value="status">Status</option>
//                 <option value="species">Species</option>
//                 <option value="location">Location</option>
//             </select>

//             <button onClick={filterData}>Filter</button>
//             <button onClick={() => setData(data)}>Reset</button>
//         </div>
//     )
// }

// export default Filter;