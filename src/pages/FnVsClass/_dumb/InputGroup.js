import React from "react";

export default ({
  computed = {},
  loading,
  renderBy,
  firstName,
  changeFirstName,
  changeFirstNameBySync,
  dispatchChange
}) => {
  return (
    <div className="box">
      {loading ? (
        <progress className="progress is-small is-primary" max="100">
          60%
        </progress>
      ) : (
        ""
      )}
      renderBy：<span className="tag is-info">renderBy {renderBy}</span>
      <br />
      fullName: <span className="tag is-info">{computed.fullName}</span>
      <br />
      {computed.firstNameSecretAward ? (
        <span className="tag is-warning">
          congrat! you got award: {computed.firstNameSecretAward}
        </span>
      ) : (
        ""
      )}
      <hr />
      <div className="field">
        <div className="control is-small">
          state changed by setState:{" "}
          <input
            disabled={loading}
            value={firstName}
            onChange={changeFirstName}
            className="input is-info is-small"
          />
          state changed by sync:
          <input
            disabled={loading}
            value={firstName}
            onChange={changeFirstNameBySync}
            className="input is-info is-small"
          />
          state changed by dispatch{" "}
          <span className="tag is-danger">( try input 666 here )</span> :
          <input
            disabled={loading}
            value={firstName}
            onChange={dispatchChange}
            className="input is-info is-small"
          />
        </div>
      </div>
    </div>
  );
};
