export default function FoodTokenBadge({ food }) {
  if (!food.allowed) return <p style={{ color: 'red' }}>❌ Food Not Allowed</p>;
  if (food.alreadyUsed) return <p style={{ color: 'orange' }}>⚠️ Already Used</p>;
  return <p style={{ color: 'green' }}>✅ Food Allowed</p>;
}

