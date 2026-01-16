import "../../styles/christ.css";
export default function CrossOfChrist({ size = 64, color = "red" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 140"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cross of Christ"
      role="img"
    >
      {/* Vertical beam */}
      <rect x="42" y="0" width="16" height="140" rx="4" fill={color} />

      {/* Horizontal beam */}
      <rect x="0" y="42" width="100" height="16" rx="4" fill={color} />
    </svg>
  );
}
