// Write a function that takes a string of one or more words as an argument and returns the same string,
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
   let arr = str.split(" ");
   let strMap = arr.map((element) => {
    if (element.length < 5){
        return element 
    }
    else return [...element].reverse().join("")
});
return strMap.join(" ");
};
