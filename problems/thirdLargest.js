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
    let largest2 = -Infinity
    let largest3 = -Infinity

    if(nums.length < 3 ){
        return null
    }
    for (let i = 0; i < nums.length; i++) {
         const num = nums[i]
         if(num > largest) {
            largest3 = largest
            largest2 = largest;
            largest = num
            //console.log(largest)
       } else if (num > largest2 && num < largest) {
         largest3 = largest2
         largest2 = num;
         //console.log(largest2)
       } else if (num > largest3 && num < largest2) {
        largest3 = num;
        console.log(largest3)
       }
    }
    //return largest3
}

console.log(thirdLargest([12, 3, 8, 2, 1, 14]))
module.exports = thirdLargest

//   for (let i = 0; i < nums.length; i++){
//     const num = nums[i]
//       if(nums[0] < nums[i]){
//           largest3 = largest2
//           largest2 = largest
//           largest = num
//           console.log(largest)
//         } else if(nums[0] < nums.length-1 && nums [0]> 10){
//             largest2 = nums[i]
//             console.log(largest2)
//         }
//         // else if(num > largest3 && num < largest2){
//         //     largest3 = num
//         // }
       
//     }
//     // return largest3


//       if(nums.length < 3){
//           return null
//       }else if(nums[0] < nums[i]) {
//           largest = nums[i]
//           console.log(largest)
//          }else if(nums[i] < largest) {
//             largest2 = nums[i] 
//             console.log(largest2) 
//          }
//   }
//   return largest3