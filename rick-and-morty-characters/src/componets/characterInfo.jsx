
function CharacterInfo({data}){
    return(
        <div className="character-sec">
            <table className='characterTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Species</th>
                        <th>Location</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((characters ) => (
                        <tr key={characters.id}>
                            <td>{characters.name}</td>
                            <td>{characters.status}</td>
                            <td>{characters.species}</td>
                            <td>{characters.location.name}</td>
                            <td><img src={characters.image} width="80px"/> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CharacterInfo;