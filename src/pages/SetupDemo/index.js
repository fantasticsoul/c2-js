import React from "react";
import "./_model";
import FnDemo from "./FnDemo";
import ClassDemo from "./ClazzDemo";
import ComponentTabs from "components/biz-smart/ComponentTabs";

const compMap = {
  fn: { comp: FnDemo, label: "fn component", count:1 },
  class: { comp: ClassDemo, label: "class component", count:1 }
};

export default React.memo(function() {
  return <ComponentTabs compMap={compMap} />;
});
