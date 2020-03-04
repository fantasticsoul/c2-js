import React from "react";

export default ({ value, onChange }) => (
  <div className="field">
    <div className="control is-small">
      <input
        value={value}
        onChange={onChange}
        className="input is-primary is-small"
      />
    </div>
  </div>
);
