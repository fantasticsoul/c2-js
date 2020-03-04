import React, { Component } from "react";

const cmap = React.Children.map;
const clone = React.cloneElement;

function isEl(child, elName) {
  // console.log('child.type', child.type);
  // console.log('child.__innerName', child.__innerName);
  return child.type.name === elName;
}


function attachUserProps(children, onClick, activeKeys = []) {
  // return children;
  if (children) {
    const nv = cmap(children, child => {
      if (isEl(child, "List")) {
        const { children: listChildren, ...otherProps } = child.props;
        const clonedListCildren = cmap(listChildren, listChild => {
          if (isEl(listChild, "ListItem")) {
            const { children, ...otherProps } = listChild.props;
            const key = listChild.key;
            otherProps.isActive = activeKeys.indexOf(key) >= 0;
            otherProps.onClick = e => onClick(key, e);
            return clone(listChild, otherProps);
          }
          return listChild;
        });

        return clone(child, otherProps, clonedListCildren);
      }
      return child;
    });

    return nv;
  }

  return "";
}

//MenuLabel ListItem
const Menu = ({ children, onClick, activeKeys = [] }) => {
  return (
    <aside className="menu">
      {attachUserProps(children, onClick, activeKeys)}
    </aside>
  );
};

const Label = ({ children }) => {
  return <p className="menu-label">{children}</p>;
};

// ListItem or SubList
const List = ({ activeKeys = [], children }) => {
  return <ul className="menu-list">{children}</ul>;
};

const ListItem = ({ children, isActive = false, onClick }) => {
  return (
    <li>
      <a className={isActive ? "is-active" : ""} onClick={onClick}>
        {children}
      </a>
    </li>
  );
};
ListItem.prototype.__innerName = "ListItem";

// SubListLabel or SubListContent
const SubList = ({ children }) => {
  return <li>{children}</li>;
};

const SubListLabel = ({ label, isActive = false }) => {
  return <a className={isActive ? "is-active" : ""}>{label}</a>;
};

// ListItem
const SubListContent = ({ children }) => {
  return <ul>{children}</ul>;
};

Menu.Label = Label;
Menu.List = List;
Menu.ListItem = ListItem;
Menu.SubList = SubList;
Menu.SubListLabel = SubListLabel;
Menu.SubListContent = SubListContent;

export default Menu;
