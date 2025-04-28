import test from "node:test";

test('My first test', () => {
  expect(Math.max(1, 5, 10)).toBe(10);
});

function expect(arg0: number) {
  throw new Error("Function not implemented.");
}
