
import { useNavigate } from "react-router-dom";
export default function EventCard({ event }) {
  const {
    eventTitle,
    eventSubTitle,
    venueName,
    location,
    startDate,
    endDate,
    venueImages,
    _id
  } = event;

  const navigate = useNavigate();

  return (
    
    <div 
    className="event-card clickable"
      onClick={() => navigate(`/event/${_id}`)}>
      <img
        src={venueImages?.[0]}
        alt={venueName}
        className="event-image"
      />

      <div className="event-content">
        <h3>{eventTitle}</h3>
        <p className="subtitle">{eventSubTitle}</p>

        <p>
          📍 {venueName}, {location.city}, {location.state}
        </p>

        <p>
          🗓 {new Date(startDate).toDateString()} –{" "}
          {new Date(endDate).toDateString()}
        </p>
      </div>
    </div>
  );
}


// export default function EventCard({ event, onScan, onGenerate }) {
//   return (
//     <div className="event-card">
//       <h3>{event.name}</h3>
//       <p>{event.location}</p>
//       <p>{event.dateRange}</p>

//       <div className="event-actions">
//         <button onClick={onScan}>Scan QR</button>
//         <button onClick={onGenerate}>Generate QR</button>
//       </div>
//     </div>
//   );
// }
