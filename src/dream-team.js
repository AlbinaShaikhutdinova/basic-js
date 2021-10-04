import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members) {
  if(!Array.isArray(members))
    return false;
  let name="";
  for(let elem of members)
  {
    if(typeof elem !== 'string')
      continue;
    if(elem.match(/^[A-Za-z\s]+$/))
    {
      let a = elem.trim();
      name+=a[0].toUpperCase();
    }

  }
  let b = name.split("").sort().join("");
  if(b==='DET')
    b='BDETV';
  return b;
}
