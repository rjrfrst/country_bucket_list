import { useState, useEffect } from "react";
import CountryToVisit from "../components/CountryToVisit";


const CountryContainer = () => {

    const [listOfCountries, setListOfCountries] = useState("");

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
    


    return ( 
        <>
        <h1>Country container</h1>
        {/* <CountryToVisit /> */}
        </>
     );
}
 
export default CountryContainer;