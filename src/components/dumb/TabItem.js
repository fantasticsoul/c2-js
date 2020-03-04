import React from "react";

export default ({ isActive, label, onClick, tabName = "" }) => (
  <li
    className={isActive ? "is-active" : ""}
    data-tab-name={tabName}
    onClick={onClick}
  >
    <a>
      <span>{label}</span>
    </a>
  </li>
);
