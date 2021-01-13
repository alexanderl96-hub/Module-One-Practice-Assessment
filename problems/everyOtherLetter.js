/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} - 
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

function everyOtherLetter(str) {
    let newString = ""
    for(let i = 0; i < str.length; i+= 2){
        if(i % 2 ===0){
            newString = newString + str[i]
        }
    }return newString
    
    
}

module.exports = everyOtherLetter;
