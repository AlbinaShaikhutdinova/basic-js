import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date) {
  if(isEmptyObject(date))
    return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) === '[object Date]')
  {
    if (date.getTime() !== date.getTime()) {
      throw new Error('Invalid date!');
    }
  }
  else return 'Unable to determine the time of year!';

  let month = date.getMonth();
  if(month<2 || month===11)
    return 'winter';
  else if(month>1 && month<5)
    return 'spring';
  else if(month>4 && month<8)
    return 'summer';
  else return 'fall';


  // remove line with error and write your code here
}
function isEmptyObject(value) {
  try{
    return Object.keys(value).length === 0 && value.constructor === Object;
  }
  catch{
    return true;
  }
}
Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};