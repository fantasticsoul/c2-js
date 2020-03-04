import React, { Component } from "react";

/**
 * bulma button @see https://bulma.io/documentation/elements/button/
 * in:
 * <Button blumaIs={['small', 'dark']}>open menu</Button>
 * out:
 * <button class="button is-small is-dark">White</button>
 */
export default ({
  className = "",
  bulmaIs = [],
  children,
  onClick,
  style = {}
}) => {
  const mergedCls = `button ${bulmaIs
    .map(v => `is-${v}`)
    .join(" ")} ${className}`;
  return (
    <button style={style} className={mergedCls} onClick={onClick}>
      {children}
    </button>
  );
};
