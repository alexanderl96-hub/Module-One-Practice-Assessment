/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

function thirdLargest(nums) {
    let largest = 0
    let largest2 = []
    let largest3 = []
  for (let i in nums){

      if(nums.length < 3){
          return null
      }else if(i >= nums[i]) {
          largest = nums[i]
          largest2 = largest
          console.log(largest)
         }else if(nums[i] > largest2 && nums[i]<largest){
             largest2 = nums[i]
         }else if(nums[i] < largest2 && i >= nums[i]){
             largest3.push(i)
         }
  }
  return largest3
}
console.log(thirdLargest([12, 3, 8, 2, 1, 14]))
module.exports = thirdLargest