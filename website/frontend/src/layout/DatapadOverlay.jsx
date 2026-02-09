import "../styles/overlay.css";

export default function DatapadOverlay({ active }) {
  return (
    <div className={`datapad-overlay ${active ? "is-on" : ""}`} aria-busy={active}>
      <div className="spinner-container" role="status">
        <div className="spinner-outer" />
        <div className="spinner-inner" />
        <span className="loader-text">SYNCHRONIZING</span>
      </div>
    </div>
  );
}
