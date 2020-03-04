import React from "react";
import { registerHookComp } from "concent";
import { Tabs } from "reactbulma";
import TabItem from "../dumb/TabItem";

const makeTabActiveStatus = (types) => {
  const toSet = { tab_isActive_: {}, activeTab: "" };
  types.forEach(t => (toSet.tab_isActive_[t] = false));
  return toSet;
};

function changeActiveTabFn({ activeTab, types } ){
  const tab_isActive_ = makeTabActiveStatus(types);
  tab_isActive_[activeTab] = true;
  return { tab_isActive_, activeTab };
}

export const setup = ctx => {
  const compType_info_ = ctx.props.compMap;
  const types = Object.keys(compType_info_);

  const state = () => {
    const tab_isActive_ = makeTabActiveStatus(types);
    const activeTab = ctx.props.activeTab || types[0] || "";
    if (activeTab) tab_isActive_[activeTab] = true;
    return { tab_isActive_, activeTab };
  };
  ctx.initState(state());

  const changeActiveTab = e => {
    const activeTab = e.currentTarget.dataset.tabName;
    const tab_isActive_ = makeTabActiveStatus(types);
    tab_isActive_[activeTab] = true;
    ctx.setState({ tab_isActive_, activeTab });
  };
  // const changeActiveTab = e => {
  //   const activeTab = e.currentTarget.dataset.tabName;
  //   ctx.invoke(changeActiveTabFn, {activeTab, types});
  // };

  return {
    renderTabItems: () => {
      const { tab_isActive_ } = ctx.state;
      return types.map(type => {
        const { label } = compType_info_[type];
        return (
          <TabItem
            key={type}
            isActive={tab_isActive_[type]}
            label={label}
            tabName={type}
            onClick={changeActiveTab}
          />
        );
      });
    },
    renderComp: () => {
      const { activeTab } = ctx.state;
      const { comp: TargetComp, count } = ctx.props.compMap[activeTab];
      const compViews = [];
      for(let i=0; i<count; i++){
        compViews.push(<TargetComp key={i} renderBy={activeTab}/>);
      }
      return compViews;
    }
  };
};

const render = ctx => {
  const { renderTabItems, renderComp } = ctx.settings;

  return (
    <>
      <Tabs toggle fullwidth>
        <ul>{renderTabItems()}</ul>
      </Tabs>
      {renderComp()}
    </>
  );
};

export default registerHookComp({
  setup,
  render
});
