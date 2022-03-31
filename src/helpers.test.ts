import { formatPrice } from "./helpers";

describe("helpers", () => {
  it("formatPrice should return a formatted price with USD symbol", () => {
    expect(formatPrice(10)).toEqual("$10.00");
    expect(formatPrice(0)).toEqual("$0.00");
  });
});
