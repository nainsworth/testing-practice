// === Capitalize Test ===
const capitalize = require("./js/capitalize");

test("capitalizes string", () => {
  expect(capitalize("Capitalize this string")).toBe("CAPITALIZE THIS STRING");
});

// === Reverse String Test ===
const reverseString = require("./js/reverse");

test("reverse string", () => {
  expect(reverseString("Reverse this string")).toBe("gnirts siht esreveR");
});

// === Calculator Test ===
const calculator = require("./js/calculator");

// Add Test
test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

// Subtract Test
test("subtracts two numbers", () => {
  expect(calculator.sub(5, 3)).toEqual(2);
});

// Divide Test
test("divides two numbers", () => {
  expect(calculator.div(8, 2)).toEqual(4);
});

// Multiply Test
test("multiply two numbers", () => {
  expect(calculator.mul(5, 2)).toEqual(10);
});

// === Caesar Cipher Test ===
const caesarCipher = require("./js/cipher");

// Shift test
test("character shift test by 3", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

// Alphabet wrapping test
test('wraps alphabet and starts over at "a"', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

// Capital letter test
test("tests a mix of capital letters", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

// Non-alphabet character test
test("tests non-alphabet characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// === Caesar Cipher Test ===
const analyzeArray = require("./js/analyze");

test("analyze an array of numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
