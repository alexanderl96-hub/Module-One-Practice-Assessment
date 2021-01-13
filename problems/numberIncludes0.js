/**
 * Return if a given number includes 0. 
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *  
 */

function numberIncludes0(num) {
   if(num === 0 && num !==0) {
       return true
   }else{
       return false
   }
}

module.exports = numberIncludes0;
