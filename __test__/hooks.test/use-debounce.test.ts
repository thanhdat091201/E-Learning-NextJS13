// import { useDebounce } from "@/hooks/use-debounce";
// import { renderHook, act } from "@testing-library/react-hooks";
// import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";

// describe("useDebounce", () => {
//   beforeEach(() => {
//     vi.useFakeTimers();
//   });

//   afterEach(() => {
//     vi.restoreAllMocks();
//   });

//   test("should return debounced value", () => {
//     const { result } = renderHook(() => useDebounce("hello", 1000));

//     expect(result.current).toEqual("hello");

//     expect(typeof result.current).toBe("string");
//   });

//   test("should return updated debounced value if delay time runAll", () => {
//     const { result, rerender } = renderHook(
//       (props) => useDebounce(props.value, 1000),
//       {
//         initialProps: { value: "hello" },
//       }
//     );

//     expect(result.current).toEqual("hello");

//     rerender({ value: "world" });

//     act(() => {
//       vi.advanceTimersByTime(500);
//     });

//     expect(result.current).not.toEqual("world");

//     act(() => {
//       vi.advanceTimersByTime(500);
//     });

//     expect(result.current).toEqual("world");
//   });
// });

// "@testing-library/react-hooks": "^8.0.1",

import { test, expect } from "vitest";

const input = Math.sqrt(4);

test("check ", () => {
  expect(input).to.equal(2); // chai API
  expect(input).toBe(2); // jest API
});
