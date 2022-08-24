![GitHub repo size](https://img.shields.io/github/repo-size/ayushjain-10/String_Lib)
![npm](https://img.shields.io/npm/v/@ayush_10/string_lib)

# String Library

The goal of this library is to create a JavaScript Library of String functions. 

**Function 1** 

`capitalize()` - makes the **first character** of a given string uppercase.

Example: **h**ello world -> **H**ello world

**Function 2** 

`allCaps()` - makes all characters uppercase. (this is the same as [`str.toUpperCase()`]
Example: foo bar -> FOO BAR

**Function 3** 

`capitalizeWords()` - makes the first character of each word uppercase. Imagine that each word is separated by a space. 

Example: **d**o **a**ll **t**he **t**hings -> **D**o **A**ll **T**he **T**hings

**Function 4** 

`removeExtraSpaces()` - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.

**Function 5**

`kebobCase()` - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase. 

Example: `"   Hello    world   "` -> `"hello-world"`

**Function 6** 

`snakeCase()` - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase. 

Example:` "  what the    heck   "` -> `"what_the_heck"`

**Function 7** 

`camelCase()` - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces. 

Example: `Camel Case` -> `camelCase`

**Function 8** 

`shift()` this method will take the first character of a string and move to the end of a string: 

Example: Hello World -> ello WorldH

**Function 9**

`makeHashTag(str)` - This function should convert the given string to a hash tag. A hash tag begins with `#` and no spaces. Each word in the phrase begins with an uppercase letter. 

If the given string has more than three words pick the three longest and make the hash tag from those. 

Example:

- input: `"Amazing bongo drums for sale"`
- output: `['#amazing', '#bongo', '#drums']`

**Function 10**

`isEmpty(str)` - Returns `true` if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: `\n` (new line) `\r` (carrige return), `\t` (tab).

Example: 

- Input: `"Abc def"`
- Output: `isEmpty("Abc def") // false`

```js
// Example - notice source string 
// contains tabs, spaces, and returns
const str = `   
			
			`;

isEmpty(str) // true 
```
