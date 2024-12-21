const capitalize = require("./js/capitalize");
const reverseString = require("./js/reverse");

test("capitalizes string", () => {
  expect(capitalize("Capitalize this string")).toBe("CAPITALIZE THIS STRING");
});

test("reverse string", () => {
    expect(reverseString("Reverse this string")).toBe("gnirts siht esreveR");
})