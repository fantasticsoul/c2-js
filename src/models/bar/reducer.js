import * as barServ from "../../services/bar";
import * as bizCst from "../../base/constant/biz";


export async function changeFirstName(firstName, moduleState, actionCtx) {
  const toSet = { firstName };
  if (firstName === "666") {
    await actionCtx.setState({ loading: true, firstName });
    const { awardList } = await barServ.fetchAwardByCode(
      bizCst.AWARD_FOR_FIRST_NAME
    );
    toSet.firstNameSecretAward = awardList;
    toSet.loading = false;
  }

  return toSet;
}

export async function f1(){
  return { key1: ''};//return new partial state
}

export async function f2(){
  return { key2: ''};//return new partial state
}

export async function essyCombineAndCallOtherFn(payload, moduleState, actionCtx){
  await actionCtx.dispatch(f1);
  await actionCtx.dispatch(f2);
}