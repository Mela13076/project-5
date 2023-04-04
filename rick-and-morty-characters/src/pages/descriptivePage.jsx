// import {Link} from 'react-router-dom'
// import './descriptivePage.css'

// function Descriptive(){
//     return(
//         <div className="descriptivePage">
//             <h1>Description for: {name} </h1>
//             <div className="desciptionCard">
//                 <p>Name: {name}</p>
//                 <p>Status: {status}</p>
//                 <p>Species: {species}</p>
//                 <p>Gender: {gender}</p>
//                 <p>Origin: {origin} </p>
//                 <p>Location: {location}</p>
//                 <p>Episode count: {episode.length} </p>
//             </div>
//             <div className="mainLink">
//                 <Link to="/"> Table of characters </Link>
//             </div>
//         </div>
//     )
// }

// export default Descriptive


import { Link, useLocation } from 'react-router-dom';
import './descriptivePage.css'

function Descriptive(){
    const location = useLocation();
    const { name, status, species, gender, origin, location: charLocation, episode } = location.state || {};
    console.log(location)
    return(
        <div className="descriptivePage">
            <h1>Description for: {name} </h1>
            <div className="desciptionCard">
                <p>Name: {name}</p>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
                <p>Origin: {origin} </p>
                <p>Location: {charLocation?.name}</p>
                <p>Episode count: {episode?.length} </p>
            </div>
            <div className="mainLink">
                <Link to="/"> Table of characters </Link>
            </div>
        </div>
    )
}

export default Descriptive







// import { useParams, Link } from "react-router-dom";

// function Descriptive({ data }) {
//   const { id } = useParams();

//   // check if data is defined before calling find function
//   const character = data ? data.find((character) => character.id === parseInt(id)) : null;

//   if (!character) {
//     return <div>Character not found</div>;
//   }

//   return (
//     <div className="descriptive-sec">
//         <h1>{character.name}</h1>
//         <div className="descriptive-container">
//             <div className="descriptive-image">
//                 <img src={character.image} alt={character.name} />
//             </div>
//             <div className="descriptive-details">
//                 <div className="descriptive-data">
//                     <span>Status:</span>
//                     {character.status}
//                 </div>
//                 <div className="descriptive-data">
//                     <span>Species:</span>
//                     {character.species}
//                 </div>
//                 <div className="descriptive-data">
//                     <span>Gender:</span>
//                     {character.gender}
//                 </div>
//                 <div className="descriptive-data">
//                     <span>Origin:</span>
//                     {character.origin.name}
//                 </div>
//                 <div className="descriptive-data">
//                     <span>Location:</span>
//                     {character.location.name}
//                 </div>
//             </div>
//         </div>
//         <div className="mainLink">
//                 <Link to="/"> Table of characters </Link>
//         </div>
//     </div>
//   );
// }

// export default Descriptive;


