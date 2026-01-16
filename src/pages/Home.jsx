"use strict";
import ErrorApiState from "../components/error/ErrorApiState";
import EventSkeleton from "../components/skeletons/EventSkeleton";
import { useEvents } from "../hooks/queries/useEvents";
import EventCard from "../components/events/EventCard";

import "../styles/event-card.css";

export default function Home() {
  const { data = {}, isLoading, error } = useEvents();

  if (isLoading) {
    return (
      <div className="grid">
        {[...Array(3)].map((_, i) => (
          <EventSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorApiState error={error} />;
  }

  return (
    <div className="grid">
      {data?.events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}
