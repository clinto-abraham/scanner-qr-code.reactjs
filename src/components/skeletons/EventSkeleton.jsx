"use strict";
import '../../styles/skeleton.css'

export default function EventSkeleton() {
  return (
    <div className="event-card skeleton">
      <div className="skeleton-image wave" />
      <div className="skeleton-text wave" />
      <div className="skeleton-text small wave" />
    </div>
  );
}
