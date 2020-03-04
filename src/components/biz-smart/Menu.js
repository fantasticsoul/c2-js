import { run, register, registerHookComp } from "concent";
import React, { Component } from "react";
import { history } from "react-router-concent";
import "./Menu.css";
import Menu from "../dumb/Menu";
import Button from "../dumb/Button";
import * as bizCst from "../../base/constant/biz";

const { PAGE_MULTI_COMP, PAGE_SETUP_DEMO, PAGE_BASIC_DEMO } = bizCst;

const { Label, List, ListItem } = Menu;
const btnIs = ["small", "info"];

const state = {
  visible: false,
  activeKeys: []
};

const setup = ctx => {
  ctx.on("openMenu", () => {
    ctx.setState({ visible: true });
  });
  return {
    handleMenuClick: key => {
      ctx.setState({ activeKeys: [key] });
      history.push(key);
    }
  };
};

const render = ctx => {
  console.log("%c Menu", "color:green;");
  if (!ctx.state.visible) return "";

  return (
    <div className="ccMenu">
      <Button
        className="ccMenuCloseBtn"
        onClick={ctx.syncBool("visible")}
        bulmaIs={btnIs}
      >
        close
      </Button>
      <Menu
        activeKeys={ctx.state.activeKeys}
        onClick={ctx.settings.handleMenuClick}
      >
        <Label>code snippet</Label>
        <List>
          <ListItem key={PAGE_SETUP_DEMO}>show setup</ListItem>
          <ListItem key={PAGE_MULTI_COMP}>Fn vs Class</ListItem>
          <ListItem key={PAGE_BASIC_DEMO}>basic demo</ListItem>
        </List>
        <Label>ref api course</Label>
        <List>
          <ListItem key="api_2">dispatch</ListItem>
          <ListItem key="api_3">invoke</ListItem>
          <ListItem key="api_4">setup</ListItem>
        </List>
      </Menu>
    </div>
  );
};

export default registerHookComp({
  state,
  setup,
  render
});
