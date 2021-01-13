/**
 * Returns the number of times the target is in the array
 * @param {Array} arr - array of elements
 * @param {any} target - target to find in array
 * @returns {number} - amount of times the target was included
 *
 * ex: howManyTargets([1, 2, 3, 2, 1, 1], 1) //=> 3
 *
 */

function howManyTargets(arr, target) {
    let countTarg = 0
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === target ){
            countTarg += 1
        }
    }return countTarg
}

module.exports = howManyTargets;
