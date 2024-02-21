import { describe, expect, test } from "vitest";

describe("getDashboardCourses", () => {
  test('variety has "Emp" in its name', () => {
    const variety = {
      name: "Empire",
      count: 1,
    };
    expect(variety).toEqual({
      name: expect.stringContaining("Emp"),
      count: 1,
    });
  });
});
