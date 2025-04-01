import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const[countries, setCountries]=useState([]);
    const[visitedCountries, setVisitedCountries]=useState([])

    const[visitedFlags, setVisitedFlags]=useState([])


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    }, [])

    const handleVisitedCountry =country2=>{
        console.log('add this to your visited country ');

        const newVisitedCountry=[...visitedCountries, country2]
        setVisitedCountries(newVisitedCountry)
        
        console.log(country2);
        
    }

    const handleVisitedFlags= flag =>{
        console.log(flag);
        
       const newVisitedFlags=[...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div >
            <h3>Countries: {countries.length}</h3>

            {/* visited country */}
            <div>
            <h5>Visited Countries:{visitedCountries.length}</h5>
            <ul>
                {
                    visitedCountries.map(countryp => <li key={countryp.cca3}>{countryp.name.common}</li>)
                }
            </ul>

            </div>

            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>

                {/* display countries */}
           <div className="country-container">
           {
                countries.map(cntry=> 
                     <Country key={cntry.cca3}
                     handleVisitedCountry={handleVisitedCountry}
                     handleVisitedFlags={handleVisitedFlags}
                     countryInside={cntry}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;