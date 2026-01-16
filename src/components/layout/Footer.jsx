export default function Footer() {
  return (
    <footer
      style={{
        padding: '1rem',
        textAlign: 'center',
        background: 'var(--footer-bg)',
        marginTop: 'auto',
      }}
    >
      <small>© {new Date().getFullYear()} Event Ops</small>
    </footer>
  );
}
