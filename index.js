// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function isBalanced(string) {
  let stack = []; // Set empty array to store stack
  let bracketMap = {
    // Key value pair
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of string) {
    // Initial set up for of loop, { (< pop, since stack.pop() -> '(', bracketMap[')'] = '(', then '(' !== '(', false statement
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const bracketsString = '{()[]}';
console.log('Is Balanced:', isBalanced(bracketsString));
