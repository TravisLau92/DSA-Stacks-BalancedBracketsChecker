Certainly! Here's the revised version of the question with different types of brackets included in the input string:

**Title: Implement a Balanced Brackets Checker Using a Stack**

**Objective:**
Develop a JavaScript function to check if a string containing various types of brackets (`()`, `{}`, `[]`) is balanced using a stack. The function should return `true` if the string is balanced (each opening bracket has a matching closing bracket) and `false` otherwise.

**Given the following input:**

```javascript
const bracketsString = "{()[]}";

console.log("Is Balanced:", isBalanced(bracketsString));
```

For example, after implementing the `isBalanced` function, you should be able to produce the following output:
```javascript
Is Balanced: true
```

<details>
<summary>Hints</summary>

1. Define a function `isBalanced(string)` that takes a string of brackets.
2. Create a stack (an array in JavaScript) to keep track of opening brackets.
3. Iterate through each character in the string.
   - If an opening bracket is encountered (`{`, `[`, `(`), push it onto the stack.
   - If a closing bracket is encountered (`}`, `]`, `)`), pop from the stack and check if it matches the corresponding opening bracket. If the stack is empty or the brackets don't match, return `false`.
4. After iterating through the string, the stack should be empty if the brackets are balanced. If not, return `false`.
5. If the stack is empty, return `true` indicating the string is balanced.

This method uses a stack to ensure that each type of opening bracket is properly closed in the correct order.

</details>

**Challenge:**

- Adapt the function to handle strings with mixed characters, ensuring it only checks for balance in brackets.
- Test with various strings, including those with nested and interleaved brackets, to ensure comprehensive functionality.