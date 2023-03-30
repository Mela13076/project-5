
import React from 'react';

function Dashboard(props){
    const { filteredCharacters } = props;

    // Calculate the number of characters
    const numCharacters = filteredCharacters.length;

    // Calculate the number of alive characters
    const numAlive = filteredCharacters.filter(character => character.status === 'Alive').length;

    // Calculate the number of human characters
    const numHumans = filteredCharacters.filter(character => character.species === 'Human').length;

    return (
        <div className="dashboard">
            <div className="character-total card">
                <p>Total Number of Characters: {numCharacters}</p>
            </div>
            <div className="alive-total card">
                <p>Total Alive: {numAlive}</p>
            </div>
            <div className="human-total card">
                <p>Total Humans: {numHumans}</p>
            </div>
        </div>
    );
}

export default Dashboard;
