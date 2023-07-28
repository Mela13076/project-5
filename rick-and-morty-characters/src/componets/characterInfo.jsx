import Portal from "../assets/transparent-portal.png";
import {Link} from 'react-router-dom'
import Descriptive from "../pages/descriptivePage";

function CharacterInfo({data}){
    return(
        <div className="character-sec">
            <table className='characterTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Profile</th>
                        <th>Status</th>
                        <th>Species</th>
                        <th>Location</th>
                        
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((characters ) => (
                        <tr key={characters.id}>
                            <td>{characters.name}</td>
                            <td><img src={characters.image} width="80px"/> </td>
                            <td>{characters.status}</td>
                            <td>{characters.species}</td>
                            <td>{characters.location.name}</td>
                            <td>
                                <Link to={`/description/${characters.id}`}>
                                    <img
                                        src={Portal}
                                        alt="link"
                                        width="100px"
                                        className="linkPortal"
                                    />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CharacterInfo;

// import Portal from "../assets/transparent-portal.png";
// import { Link, useNavigate, useParams } from 'react-router-dom';

// function CharacterInfo({ data }) {
//   const navigate = useNavigate();

//   const handleClick = (id) => {
//     navigate(`/description/${id}`);
//   };

//   return (
//     <div className="character-sec">
//       <div className="characterTable">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Profile</th>
//               <th>Status</th>
//               <th>Species</th>
//               <th>Location</th>
//               <th>Link</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((character) => (
//               <tr key={character.id}>
//                 <td>{character.name}</td>
//                 <td><img src={character.image} width="80px" alt={character.name} /></td>
//                 <td>{character.status}</td>
//                 <td>{character.species}</td>
//                 <td>{character.location.name}</td>
//                 <td>
//                   <div className="linkWrapper" onClick={() => handleClick(character.id)}>
//                     <img src={Portal} alt="link" width="100px" className="linkPortal" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default CharacterInfo;





// import Portal from "../assets/transparent-portal.png";
// import { Link } from 'react-router-dom';

// function CharacterInfo({ data }) {
//     return (
//         <div className="character-sec">
//             <table className='characterTable'>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Profile</th>
//                         <th>Status</th>
//                         <th>Species</th>
//                         <th>Location</th>
//                         <th>Link</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((character) => (
//                         <tr key={character.id}>
//                             <td>{character.name}</td>
//                             <td><img src={character.image} width="80px"/></td>
//                             <td>{character.status}</td>
//                             <td>{character.species}</td>
//                             <td>{character.location.name}</td>
//                             <td>
//                                 <Link to={{ 
//                                     pathname: "/description", 
//                                     state: {
//                                         name: character.name,
//                                         status: character.status,
//                                         gender: character.gender,
//                                         species: character.species,
//                                         location: character.location.name,
//                                         origin: character.origin.name,
//                                         episodes: character.episode.length
//                                     }
//                                 }} key = {character.id}>
//                                     <img src={Portal} alt="link" width="100px" className="linkPortal"/>
//                                 </Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default CharacterInfo;


