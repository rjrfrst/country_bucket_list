import Country from "./Country";

const VisitedCountry = ({countriesVisited}) => {

    // mapped array
    const countryComponents = countriesVisited.map((country, index) => <Country country={country} key={index}/>)

    return ( 
        <>
            <hr></hr>
            <h2>Visited countries</h2>
            {countryComponents}
        </>
     );
}
 
export default VisitedCountry;