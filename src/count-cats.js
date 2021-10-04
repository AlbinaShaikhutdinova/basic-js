import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats( matrix) {
  let cats=0;
  for(const row of matrix)
  {
    for(let elem of row){
      if(elem==='^^')
        cats++;
    }
  }
  return cats;
  // remove line with error and write your code here
}
