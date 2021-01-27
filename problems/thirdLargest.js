/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

function thirdLargest(nums) {
    let largest = -Infinity
    let secondLargest = -Infinity
    let thirdLargest = -Infinity

    if(nums.length < 3 ){
        return null
    }
    for (let i = 0; i < nums.length; i++) {
         const num = nums[i]
         if(num > largest) {
            thirdLargest = secondLargest
            secondLargest = largest;
            largest = num
       } else if (num > secondLargest && num < largest) {
         thirdLargest = secondLargest
         secondLargest = num;
       } else if (num > thirdLargest && num < secondLargest) {
        thirdLargest = num;
       }
    }
    return thirdLargest
}
module.exports = thirdLargest
