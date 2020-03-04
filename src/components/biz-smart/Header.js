import React, { Component } from "react";
import Message from "../dumb/Message";
import { register } from "concent";
import * as bizCst from "../../base/constant/biz";

const {
  PAGE_DEFAULT,
  PAGE_SETUP_DEMO,
  PAGE_MULTI_COMP,
  PAGE_BASIC_DEMO
} = bizCst;

const CommonFooter = () => {
  let sourceCode = '';
  if(window.top === window){
    sourceCode = (
      <span className="tag is-info is-light">
        <a href="https://codesandbox.io/s/concent-guide-xvcej" target="blink">
          Here see source code
        </a>
      </span>
    );
  }
  return (
    <>
      <br />
      {sourceCode}
      <span className="tag is-info is-light">
        <a href="https://github.com/concentjs/concent" target="blink">
          More about Concent
        </a>
      </span>
      <span className="tag is-danger">
        click [open menu] button to see more demos!
      </span>
    </>
  );
};

const pathname_desc_ = {
  [PAGE_SETUP_DEMO]: {
    title: "now you are at setup-demo page",
    content: (
      <>
        This case show you how to use setup in function component with
        useConcent api, and use setup in class component with register api, and
        what the awesome thing is you will find the class and function share the
        business logic code elegantly!!!
        <CommonFooter />
      </>
    )
  },
  [PAGE_MULTI_COMP]: {
    title: "now you are at function vs class page",
    content: (
      <>
        setState is a very important entrance to tell react it is time to update
        view, but you can also choose other interface like
        dispatch,sync,invoke... and their use way is totally 100 percent same
        between class and function.
        <CommonFooter />
      </>
    )
  },
  [PAGE_BASIC_DEMO]: {
    title: "now you are at basic-demo page",
    content: (
      <>
        this page content shows 3 ways of creating component and multi ways to
        change shared state!
        <CommonFooter />
      </>
    )
  }
};

const pathname = window.location.pathname;
const hash = window.location.hash; // #/set-state-demo

const defaultPathname = hash ? hash.split("#")[1] : pathname;

@register({ compareProps: false })
class Header extends Component {
  state = { pathname: defaultPathname };

  $$setup(ctx) {
    ctx.aux("onUrlChanged", params => {
      const pathname = params.pathname;
      ctx.setState({ pathname });
    });
  }

  getDesc = () => {
    const { pathname } = this.state;
    let desc = pathname_desc_[pathname];

    if (!desc) {
      if (pathname !== "/") {
        desc = {
          title: `${pathname}`,
          content: "no desc for current pathname"
        };
      } else {
        desc = pathname_desc_[PAGE_DEFAULT];
      }
    }
    return desc;
  };

  render() {
    console.log("%c Header", "color:green;");
    const desc = this.getDesc();
    return <Message {...desc} />;
  }
}

export default Header;
