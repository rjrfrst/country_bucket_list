import { useState, useEffect } from "react";
import CountryToVisit from "../components/CountryToVisit";
import VisitedCountry from "../components/VisitedCountry";
import CountryButton from "../components/CountryButton";

const CountryContainer = () => {

    const [listOfCountries, setListOfCountries] = useState([]);
    const [countriesVisited, setCountriesVisited] = useState([]);
    // Fetch the data from the country API
    const loadCountryData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setListOfCountries(data);
    }
    //insert a useEffect
    // pass the loadCountryData, remember to put in the dependency array
    useEffect ( () => {
        loadCountryData();
    }, [])

    // Function to update a country
    const handleNewCountry = (newCountry) => {
        const updatedCountries = [...countriesVisited]
        updatedCountries.push(newCountry);
        setCountriesVisited(updatedCountries);
    }
    
    
    return ( 
        <>
        <h1>Country container</h1>
                <h2>Country list</h2>

                {/* Present the user with a list of countries from which they can select from */}
                {/* Get a prop to pass to CountryToVisit */}
                <CountryToVisit listOfCountries={listOfCountries}
                                handleNewCountry ={handleNewCountry}
                />

                {/*  */}
                <VisitedCountry countriesVisited ={countriesVisited}
                />

                {/*  */}
                <CountryButton onButtonClick={loadCountryData}/>


        </>
     );
}
 
export default CountryContainer;