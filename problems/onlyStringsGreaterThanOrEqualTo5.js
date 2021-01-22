/**
 * Returns an array of words that have 5 or more letters.
 * @param {string[]} words - an array containing words
 * @returns {string[]} - words with 5 or more letters
 *
 * ex: onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
 * returns ["hello", "corey"]
 */
// this is the code that I'm running trying to find the words greater or equal 5.
//just one of the elems has pop up. 
// how i can change my code to get the second word.
function onlyStringsGreaterThanOrEqualTo5(words) {
  let newString = [];
  for (let i = 0; i <= words.length-1; i++) {
    if (words[i].length >= 5 ) {
      newString.push(words[i])
    }
  }
  return newString;
}

console.log(onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"]));
module.exports = onlyStringsGreaterThanOrEqualTo5;
