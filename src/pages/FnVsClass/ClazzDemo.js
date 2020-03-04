import React from "react";
import { register } from "concent";
import InputGroup from "./_dumb/InputGroup";
import { setup } from "./BetterFnDemo";

class ClazzDemo extends React.Component {
  /**@type {import('types/store').ICtxM<{renderBy:string}, {}, 'bar', ReturnType<typeof setup>>} */
  ctx = {};
  render() {
    const { ctx, props } = this;
    return (
      <InputGroup
        computed={ctx.moduleCompute}
        {...ctx.state}
        {...ctx.settings}
        renderBy={props.renderBy}
      />
    );
  }
}

export default register({
  /**
   * use watchedKeys to define which state keys value changed will trigger this component ins render,
   * default is bar module's all state keys
   */

  // watchedKeys: [''],
  setup,
  module: "bar"
})(ClazzDemo);
