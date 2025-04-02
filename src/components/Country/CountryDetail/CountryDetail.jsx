import CountryData from "../../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {countryInside,handleVisitedCountry,handleVisitedFlags}=props
    return (
        <div>
            <h4>Country details</h4>
            <hr />
            {/* <CountryData
                countryInside={countryInside}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}

            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;