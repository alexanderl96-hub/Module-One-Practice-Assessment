/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

function longestWord(words) {
    let newWord = "";
    for(let i = 0;i < words.length; i++) {
        if(i > words[i]) {
            newWord += 1
        }
    }
    return newWord
}
console.log(longestWord("cat", "bird", "hello", "corey", "do"))
module.exports = longestWord;
