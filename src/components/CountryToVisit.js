import Country from "./Country";

const CountryToVisit = ({listOfCountries, handleNewCountry}) => {

    const countryComponents = listOfCountries.map((country, index) => <Country country={country} handleNewCountry={handleNewCountry} key={index}/>)

    return(
        <>
        <h2>List of countries</h2>
        {countryComponents} 
        
        </>
    )
}

export default CountryToVisit;