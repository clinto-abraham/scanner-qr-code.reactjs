export default function ErrorApiState({ error }) {
  return (
    <div className="error-box">
      <h3>⚠️ Something went wrong</h3>
      <p>{error?.message || "Unable to load events"}</p>
    </div>
  );
}
