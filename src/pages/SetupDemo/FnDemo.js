import React from "react";
import { useConcent, cst } from "concent";
import View from "./View";


/**
 * @typedef {import('types/store').ICtxM<{renderBy:string}, typeof iState,'SetupDemo'>} CtxPre
 */

export const setup = (/**@type {CtxPre}*/ctx) => {
  // const getBooks = () => ctx.dispatch("getBooks", ctx.state.reqDate);
  const getBooks = () => {
    console.log('getBooks');
    ctx.moduleReducer.getBooks(ctx.state.startTime);
  }

  ctx.effect(getBooks, []);
  ctx.effect(() => {
    // alert(`mount ${ctx.ccUniqueKey}`);
    // return ()=> alert(`unmount ${ctx.ccUniqueKey}`);
  }, []);

  return {
    getBooks
  };
};

// private state
export const iState = () => ({
  startTime: 1,
  endTime: 2
});

/**
 * @typedef {import('types/store').ICtxM<{renderBy:string}, typeof iState,'SetupDemo',ReturnType<typeof setup>>} Ctx
 */

export default React.memo(function(props) {
  /** @type {Ctx} */
  const ctx = useConcent({
    module: "SetupDemo",
    state: iState,
    setup,
    props,
    tag: 'fnDemo',
  });
  console.log("%c SetupDemoFnComp " + ctx.ccUniqueKey, "color:green;");
  const {
    // state: { books, loading }
    state: { loading },
    moduleComputed: { books },
    settings: { getBooks }
  } = ctx;
  const renderBy = ctx.props.renderBy;

  return <View {...{ loading, books, getBooks, renderBy }} />;
});
