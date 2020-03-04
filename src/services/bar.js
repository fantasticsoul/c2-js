
import * as timerUitl from "../utils/timer";
import * as numUtil from "../utils/number";
import * as bizCst from '../base/constant/biz';


export async function fetchAwardByCode(awardCode) {
  await timerUitl.delay(3000);

  let awardList = [];
  if(bizCst.AWARD_FOR_FIRST_NAME === awardCode){
    awardList = ['diamond*'+ numUtil.random(10), 'ps4*'+ numUtil.random(10), 'switch*'+ numUtil.random(100)];
  }else if(bizCst.AWARD_FOR_LAST_NAME === awardCode){
    awardList = ['xbox', 'star-craft-final-ticket', 'game-boy'];
  }

  return {
    code: 0,
    awardList,
  };
}
