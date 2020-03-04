import { defComputed } from 'concent';

/**
 * @param {*} param0 
 * @return {string}
 */
export function firstNameSecretAward({firstNameSecretAward:newVal}){
  return newVal.join(',');
}

export const fullName = {
  fn:(newState)=>{
    return `${newState.firstName}_${newState.lastName}`;
  },
  // any value of these keys will trigger this computed function
  depKeys: ['firstName', 'lastName'],
}

// 2rd writing way
export const fullNam2 = defComputed((newState)=>{
  return `${newState.firstName}_${newState.lastName}`;
}, ['firstName', 'lastName'])