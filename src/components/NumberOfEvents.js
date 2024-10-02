import { useState } from 'react';

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
    const [numEvents, setNumEvents] =useState(currentNOE || "32");

    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, '');

        if (isNaN(numericValue) || numericValue <= 0) {
            setErrorAlert("please enter a valid number greater than 0.");
        } else {
            setErrorAlert("");
        }
        setNumEvents(numericValue);
        setCurrentNOE(numericValue);
    };

    return (
       <div id='number-of-events' className='number-of-events'>
           <input 
             type="text"
             className="num-events-input"
             value={numEvents}
             onChange={handleInputChange}
             aria-label="number of events"
           />
               

       </div>
    )
}

export default NumberOfEvents;