
export function firstName(newVal){
  if(newVal === '666'){
    // do some asynchorous in watch scope
    alert('bomb, award got!');
  }
}