import React from "react";
import { additionalProjectPhotos } from "../data/projectPhotos";

/**
 * Extra project photographs are added here through src/data/projectPhotos.js.
 * The component stays hidden until approved project photographs are supplied.
 */
export default function AdditionalPhotoGallery() {
  if (!additionalProjectPhotos.length) return null;

  return (
    <div className="project-grid additional-project-grid" aria-label="Additional project photographs">
      {additionalProjectPhotos.map((photo) => (
        <article className="project-card" key={photo.id}>
          <a
            className="additional-photo-frame"
            href={photo.sourceUrl || photo.image}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open photograph: ${photo.title}`}
          >
            <img src={photo.image} alt={photo.alt || photo.title} loading="lazy" decoding="async" />
          </a>
          <div className="project-card-copy">
            <span className="project-tag">{photo.category || "Project photograph"}</span>
            <h3>{photo.title}</h3>
            <p>{photo.caption}</p>
            {photo.sourceLabel && photo.sourceUrl ? (
              <a className="source-link" href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">
                {photo.sourceLabel} ↗
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
