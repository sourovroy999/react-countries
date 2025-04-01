import { useState } from 'react';
import './Country.css'
const Country = ({ countryInside,handleVisitedCountry,handleVisitedFlags }) => {
    // console.log(countryInside);
    const { name, flags, population, area, cca3 } = countryInside;

    const [visited, setvisited] = useState(false);

    // console.log(handleVisitedCountry);
    
    const handleVisited = () => {
        setvisited(!visited)
    }

    // const passWithParams = () => handleVisitedCountry(countryInside)
    


    return (
        <div className={`countryInside ${visited ?'visitedStyl': 'goingStyl'}`}>
            <h3 style={{color: visited?'blue':'white'}}>name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <small>code: {cca3}</small>
            <br />
            <button onClick={() => handleVisitedCountry(countryInside)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(countryInside.flags.png)}>Add flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}

        </div>
    );
};

export default Country;