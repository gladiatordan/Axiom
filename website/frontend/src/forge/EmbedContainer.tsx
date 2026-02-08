

export function EmbedContainer({ title, url }: { title: string; url: string }) {
  return (
    <div className="embed">
      <div className="embed__bar">
        <div className="embed__title">{title}</div>
        <div className="embed__actions">
          <a className="btn btn--ghost" href={url} target="_blank" rel="noreferrer">
            Open
          </a>
          <button className="btn btn--ghost" type="button" onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      </div>

      <div className="embed__frame-wrap">
        <iframe className="embed__frame" title={title} src={url} />
      </div>
    </div>
  );
}
