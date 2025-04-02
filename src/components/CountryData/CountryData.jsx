
const CountryData = ({countryInside,handleVisitedCountry,handleVisitedFlags}) => {
    console.log(countryInside.name);
    
    return (
        <div>
            <p><small>Country data: {countryInside.name.common}</small></p>
        </div>
    );
};

export default CountryData;