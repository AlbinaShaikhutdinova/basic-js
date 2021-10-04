import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    for (let ar of arr) {
      if(!Array.isArray(ar))
      {
        counter++;
      }
    }
    if(counter===arr.length)
      return 1;
    let count=1;
    for (let ar of arr) {
        if(Array.isArray(ar))
        {
          count+=this.calculateDepth(ar);
        }
    }
    return count;
  }
}
