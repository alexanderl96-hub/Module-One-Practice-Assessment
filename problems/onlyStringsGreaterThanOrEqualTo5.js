/**
 * Returns an array of words that have 5 or more letters. 
 * @param {string[]} words - an array containing words
 * @returns {string[]} - words with 5 or more letters
 *
 * ex: onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
 * returns ["hello", "corey"]
 */

function onlyStringsGreaterThanOrEqualTo5(words) {
    let newString = []
    for(let i = 0; i <= words.length; i++){
        if(words[i].length >= words[0].length && words[i].length >= 5){
           newString.push(words[i])
            newString += words[i]
            console.log(words[i])
           //if()
          // newString.push(words[i].length >= 5)
           //console.log(newString)
        }
    }return newString
    
}
console.log(onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"]))
module.exports = onlyStringsGreaterThanOrEqualTo5;
