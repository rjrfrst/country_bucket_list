const Country = ({country, handleNewCountry}) => {

    const handleClick = () => {
        handleNewCountry(country)
    }

    return ( 
        <>
            <p>{country.name.common}</p>
            <button onClick={handleClick}>Visit</button>

        </>
     );
}
 
export default Country;