import { run } from "concent";
import loadingPlugin from "concent-plugin-loading";
import { configRouterModule }  from "react-router-concent";
import models from "./models";
// import setupModel from './pages/SetupDemo/_model';

console.log("run concent, load user cutomized module config");
const _models = {};
Object.keys(models).forEach(key => {
  console.info(`load module[${key}]'s model config`);
  _models[key] = models[key];
});

run(_models, {
  plugins: [loadingPlugin],
  middlewares:[(stateInfo, next)=>{
    console.warn(stateInfo);
    next();
  }],
  isHot: true,
});
configRouterModule();

