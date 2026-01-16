import FoodTokenBadge from './FoodTokenBadge';
import StayInfo from './StayInfo';

export default function ParticipantCard({ data }) {
  return (
    <div>
      <h3>{data.participant.name}</h3>
      <FoodTokenBadge food={data.food} />
      <StayInfo stay={data.stay} />
    </div>
  );
}

