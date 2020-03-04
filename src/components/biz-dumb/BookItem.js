/**@typedef {import('types/domain').BookCu} BookCu */
import React from "react";

export default (/**@type BookCu */book) => {
  const { name, author, summary, _publishTimeLabel } = book;

  return (
    <div className="card" style={{ marginBottom: "8px" }}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">
              <a>@</a> {author}
            </p>
          </div>
        </div>

        <div className="content">
          {summary}
          <hr />
          publish at:{" "}
          <span className="tag is-info is-light">{_publishTimeLabel}</span>
        </div>
      </div>
    </div>
  );
};
