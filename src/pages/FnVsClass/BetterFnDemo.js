import React from "react";
import { useConcent, registerHookComp } from "concent";
import InputGroup from "./_dumb/InputGroup";
import * as fooRd from "models/bar/reducer";

/**
 * @typedef {import('types/store').ICtxM<{renderBy:string}, {}, 'bar'>} CtxPre
 */
export const setup = (/**@type {CtxPre}*/ ctx) => {
  console.log(
    "setup will only been executed one time before first rendering period!"
  );

  // ctx.on('someEvent', ()=>{/** code here */})
  // ctx.effect(()=>{/** code here */}, []); // totally equal useEffect, but sendond param pass state key name
  // ctx.effect(()=>{/** code here */}, ['keyA', 'keyB']);
  // ctx.computed('keyA', ()=>{/** code here */});// ref computed definition, but mostly recommend module computed first
  // ctx.watch('keyB', ()=>{/** code here */});// ref watch definition, but mostly recommend module watch first

  ctx.effect(() => {
    console.log("component didMount");
    return () => console.log("component will unmount");
  }, []);

  ctx.effect(() => {
    // console.log("execute every render period, including first render period");
  });

  ctx.effect(
    () => {
      // console.log("component didUpdate");
    },
    null,
    false
  );

  return {
    changeFirstName: e => ctx.setState({ firstName: e.currentTarget.value }),
    changeFirstNameBySync: ctx.sync("firstName"),

    //  ****** 3 ways of writting dispatch call ******

    // 1
    // dispatchChange: e => ctx.dispatch("changeFirstName", e.currentTarget.value)
    // 2
    // dispatchChange: e => ctx.dispatch(fooRd.changeFirstName, e.currentTarget.value),
    // 3
    dispatchChange: e =>
      ctx.moduleReducer.changeFirstName(e.currentTarget.value)
  };
};

/**
 * @typedef {import('types/store').ICtxM<{renderBy:string}, {}, 'bar', ReturnType<typeof setup>>} Ctx
 */
export default React.memo(function(props) {
  /** @type Ctx */
  const ctx = useConcent({
    module: "bar",
    props,
    connect: { loading: ["bar"] },
    setup
    /**
     * use watchedKeys to define which state keys value changed will trigger this component ins render,
     * default is bar module's all state keys
     */
    // watchedKeys: [''],
  });
  console.log("%c SetupDemoFnComp " + ctx.ccUniqueKey, "color:green;");
  console.log("%c SetupDemoFnComp 2");
  console.log(ctx.connectedState);
  const renderBy = ctx.props.renderBy;

  return (
    <InputGroup
      computed={ctx.moduleComputed}
      {...ctx.state}
      {...ctx.settings}
      renderBy={renderBy}
    />
  );
});

/** or use registerHookComp which is base on useConcent to export this component */
export const CompositionApiComp = registerHookComp({
  module: "bar",
  setup,
  connect: { loading: ["bar"] },
  render: (/** @type Ctx */ ctx) => {
    const props = {
      computed: ctx.moduleComputed,
      ...ctx.state,
      ...ctx.settings,
      renderBy: ctx.props.renderBy
    };
    return <InputGroup {...props} />;
  }
});
