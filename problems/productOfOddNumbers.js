/**
 * Return the product of all odd numbers in an array. 
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 * 
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

 function productOfOddNumbers(nums) {
     let newarr =[]
     for(let i =0; i <= nums.length; i+= 2){
         if(nums[i] % 2 !==0){
            newarr = nums[i]* 3

         }else{
             return 0
         }
     }
     return newarr

 }

 module.exports = productOfOddNumbers