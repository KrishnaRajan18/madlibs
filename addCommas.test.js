const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("it adds commas", () => {
    expect(addCommas(1)).toEqual("1");
    expect(addCommas(2500000)).toEqual("2,500,000");
    expect(addCommas(8)).toEqual("8");
    expect(addCommas(-10)).toEqual("-10");
    expect(addCommas(-5678)).toEqual("-5,678");
    expect(addCommas(22235.677)).toEqual("22,235.677");
  });
});
