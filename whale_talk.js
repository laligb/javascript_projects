let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(`${input[i]} is ${i}`);
  for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      resultArray.push(vowels[v]);
      if (input[i] === "e") {
        resultArray.push("e");
      }
      if (input[i] === "u") {
        resultArray.push("u");
      }
    }
  }
}
console.log(resultArray);

let resultString = resultArray.join('').toUpperCase();
console.log(resultString)
