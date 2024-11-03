const merge = require("./index.js");

describe("merge", () => {
  test("should merge nums1 and nums2 into a single sorted array (basic test)", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("should handle case where nums1 has initial zeros", () => {
    const nums1 = [0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 0, nums2, 3);
    expect(nums1).toEqual([1, 2, 3]);
  });

  test("should handle case where nums2 is empty", () => {
    const nums1 = [1, 2, 3];
    merge(nums1, 3, [], 0);
    expect(nums1).toEqual([1, 2, 3]);
  });

  test("should handle case where nums1 is empty", () => {
    const nums1 = [0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 0, nums2, 3);
    expect(nums1).toEqual([1, 2, 3]);
  });

  test("should handle case where all elements in nums1 are larger than in nums2", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];
    const nums2 = [1, 2, 3];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should handle case where nums1 and nums2 have identical elements", () => {
    const nums1 = [2, 2, 2, 0, 0, 0];
    const nums2 = [2, 2, 2];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([2, 2, 2, 2, 2, 2]);
  });

  test("should handle case where nums1 has elements smaller and nums2 has larger elements", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [4, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should handle case where nums2 has negative values", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [-3, -2, -1];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([-3, -2, -1, 1, 2, 3]);
  });
});
