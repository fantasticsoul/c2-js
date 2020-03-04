/**@typedef {Array<import('types/domain').Book & {_publishTimeLabel:string}} Books*/

/**
 * @return {Books}
*/
export function books({books:newVal}) {
  return newVal.map(v => {
    v._publishTimeLabel = new Date(v.publishTime).toLocaleString();
    return v;
  });
}


