import { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
    const [numEvents, setNumEvents] =useState(currentNOE || "32");

    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        setNumEvents(numericValue);
        setCurrentNOE(numericValue);
    };

    return (
       <div id='number-of-events'>
           <input 
             type="text"
             value={numEvents}
             onChange={handleInputChange}
             aria-label="number of events"
           />
               

       </div>
    )
}

export default NumberOfEvents;