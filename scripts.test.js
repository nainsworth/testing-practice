const capitalize = require("./js/capitalize");

test("capitalizes string", () => {
  expect(capitalize("Capitalize this string")).toBe("CAPITALIZE THIS STRING");
});
