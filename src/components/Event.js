import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleHideDetails = () => {
        setShowDetails(false);
    };

    return (
        <li className='event-card'>
        <div>
            {event.summary}
        </div>
        <div>
            {event.created}
        </div>
        <div>
            {event.location}
        </div>
        {!showDetails ? (
        <button className="details-btn" onClick={handleShowDetails}>
            show details
        </button>
        ) : ( 
            <>
                <div className='event-details' data-testid='event-details'>
                  {event.description} 
                </div>
                <button className="details-btn" onClick={handleHideDetails}>
                  hide details
               </button>
            </>
        )}
       
        </li>
    );
}

export default Event;