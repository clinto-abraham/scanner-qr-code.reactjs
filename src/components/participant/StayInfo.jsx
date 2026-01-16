export default function StayInfo({ stay }) {
  const mapUrl = `https://www.google.com/maps?q=${stay.lat},${stay.lng}`;
  return (
    <div>
      <p>🏠 Room: {stay.room}</p>
      <p>📍 Location: {stay.location}</p>
      <a href={mapUrl} target='_blank'>Open in Maps</a>
    </div>
  );
}

