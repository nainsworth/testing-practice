// Capitalize Test
const capitalize = require("./js/capitalize");

test("capitalizes string", () => {
  expect(capitalize("Capitalize this string")).toBe("CAPITALIZE THIS STRING");
});

// Reverse String Test
const reverseString = require("./js/reverse");

test("reverse string", () => {
  expect(reverseString("Reverse this string")).toBe("gnirts siht esreveR");
});

// Calculator Add Test
const add = require("./js/calculator");

test("adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

// Calculator Subtract Test
const subtract = require("./js/calculator");

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(8);
});

// Calculator Divide Test
const divide = require("./js/calculator");

test("divides two numbers", () => {
  expect(divide(8, 2)).toBe(4);
});

// Calculator Multiply Test
const multiply = require("./js/calculator");

test("multiply two numbers", () => {
  expect(multiply(5, 2)).toBe(10);
});
