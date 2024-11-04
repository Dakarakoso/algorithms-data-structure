const findLongestSubstring = require("./index.js");

test("returns 0 for an empty string", () => {
  expect(findLongestSubstring("")).toBe(0);
});

test('returns 7 for "rithmschool"', () => {
  expect(findLongestSubstring("rithmschool")).toBe(7);
});

test('returns 6 for "thisisawesome"', () => {
  expect(findLongestSubstring("thisisawesome")).toBe(6);
});

test('returns 7 for "thecatinthehat"', () => {
  expect(findLongestSubstring("thecatinthehat")).toBe(7);
});

test('returns 1 for "bbbbbb"', () => {
  expect(findLongestSubstring("bbbbbb")).toBe(1);
});

test('returns 8 for "longestsubstring"', () => {
  expect(findLongestSubstring("longestsubstring")).toBe(8);
});

test('returns 6 for "thisishowwedoit"', () => {
  expect(findLongestSubstring("thisishowwedoit")).toBe(6);
});

test('returns 3 for "abcabcabc"', () => {
  expect(findLongestSubstring("abcabcabc")).toBe(3);
});
