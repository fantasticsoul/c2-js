import React from "react";
import { useConcent } from "concent";
import InputGroup from "./_dumb/InputGroup";

export default React.memo(function(props) {

  /**@type {import('types/store').ICtxM<{renderBy:string}, {}, 'bar'>} */
  const ctx = useConcent({
    module: "bar",
    connect: {loading:['bar']},
    props
  });
  console.log("%c FnVsClass-FnDemo " + ctx.ccUniqueKey, "color:green;");
  // console.log("FnVsClass-FnDemo loading.bar", ctx.connectedState.loading.bar);

  const {
    state: { firstName, loading },
    sync, moduleComputed
  } = ctx;
  const renderBy = ctx.props.renderBy;

  /** see BetterFnDemo, use setup to extract these methods to static scope */
  const changeFirstName = e =>
    ctx.setState({ firstName: e.currentTarget.value });
  const changeFirstNameBySync = sync("firstName");
  const dispatchChange = e =>
    // ctx.dispatch("changeFirstName", e.currentTarget.value);
    ctx.moduleReducer.changeFirstName(e.currentTarget.value);//better way

  return (
    <InputGroup
      computed={moduleComputed}
      changeFirstName={changeFirstName}
      changeFirstNameBySync={changeFirstNameBySync}
      dispatchChange={dispatchChange}
      firstName={firstName}
      loading={loading}
      renderBy={renderBy}
    />
  );
});
