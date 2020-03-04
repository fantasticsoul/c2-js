import React from "react";
import FnDemo from "./FnDemo";
import BetterFnDemo, { CompositionApiComp } from "./BetterFnDemo";
import ClassDemo from "./ClazzDemo";
import ComponentTabs from "components/biz-smart/ComponentTabs";

const compMap = {
  fn: { comp: FnDemo, label: "fn component", count: 2 },
  betterFn: { comp: BetterFnDemo, label: "better fn component", count: 1 },
  compositionApi: { comp: CompositionApiComp, label: "compostion api comp", count: 1 },
  class: { comp: ClassDemo, label: "class component", count: 1 }
};


export default React.memo(function() {
  console.log("%c FnVsClass ", "color:green;");
  return <ComponentTabs activeTab="compositionApi" compMap={compMap} />;
});
