import { useState, useEffect } from "react";

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    }) : [];
    
    setQuery(value);
    setSuggestions(filteredLocations);

    let infoText;
    if (filteredLocations.length === 0) {
        infoText = "we cannot find the city you are looking for. please try another city."
    } else {
        infoText = ""
    }
    setInfoAlert(infoText);
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;

        if (value === "see all cties") {
            setQuery("");
            setCurrentCity("see all cities");
        } else {
            setQuery(value);
            setCurrentCity(value);
        }
        
        setShowSuggestions(false);
        setInfoAlert("");
    };

    useEffect(() => {
        setSuggestions(allLocations);
    }, [`${allLocations}`]);

    return (
        <div id="city-search">
            <input
              type="text"
              className="city"
                  placeholder="search for a city..."
              value={query}
              onFocus={() => setShowSuggestions(true)}
              onChange={handleInputChanged}
            />
            {showSuggestions ?
             <ul className="suggestions">
                {suggestions.map((suggestion) => {
                    return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
                })}
                <li key='see all cities' onClick={handleItemClicked}>
                    <b>see all cities</b>
                </li>
             </ul> : null}
        </div>
    )
}



export default CitySearch;