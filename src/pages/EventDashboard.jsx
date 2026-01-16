import { useParams } from "react-router-dom";
import ScanCards from "../components/eventDashboard/ScanCards";
import BulkUploadCard from "../components/eventDashboard/BulkUploadCard";
import SpotRegistration from "../components/eventDashboard/SpotRegistration";
import QRPrintCard from "../components/eventDashboard/QRPrintCard";
import "../styles/event-dashboard.css";
import { useEvents } from "../hooks/queries/useEvents";
export default function EventDashboard() {
  const { eventId } = useParams();
  const { data } = useEvents();

  const res = data?.events?.filter((e) => e._id == eventId);

  console.log(12, res[0], 12);
  return (
    <div className="event-dashboard">
      <h2>Event Management</h2>
      <h5>
        {res[0]?.venueName}, {res[0]?.location?.city}
      </h5>

      <ScanCards eventId={eventId} />
      <BulkUploadCard eventId={eventId} />
      <SpotRegistration eventId={eventId} />
      <QRPrintCard eventId={eventId} />
    </div>
  );
}
