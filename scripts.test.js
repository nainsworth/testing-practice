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

// Calculator Test
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
