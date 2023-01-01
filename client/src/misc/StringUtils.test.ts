import { test, expect } from "vitest";
import { msToElapsedString } from "./StringUtils";

test("milliseconds to elapsed string", async () => {
  expect(msToElapsedString).toBeTruthy();
  expect(msToElapsedString(7889456123456)).toBe("91313d 3h 35m 23s 456ms");

  expect(() => msToElapsedString(-1)).toThrowError(
    `Negative value '-1' is not allowed.`
  );
  expect(() => msToElapsedString(-999)).toThrowError(
    `Negative value '-999' is not allowed.`
  );

  expect(msToElapsedString(0)).toBe("0ms");

  // only intended for integers
  // expect(msToElapsedString(0.42)).toBe("0.42ms");
  // expect(msToElapsedString(108.42)).toBe("108.42ms");
  // expect(msToElapsedString(123456.789)).toBe("2m 3s 456.789ms");

  expect(msToElapsedString(1234)).toBe("1s 234ms");
  expect(msToElapsedString(12345)).toBe("12s 345ms");
  expect(msToElapsedString(123456)).toBe("2m 3s 456ms");
  expect(msToElapsedString(1234567)).toBe("20m 34s 567ms");
  expect(msToElapsedString(12345678)).toBe("3h 25m 45s 678ms");
  expect(msToElapsedString(123456789)).toBe("1d 10h 17m 36s 789ms");
  expect(msToElapsedString(1234567890)).toBe("14d 6h 56m 7s 890ms");
  expect(msToElapsedString(12345678901)).toBe("142d 21h 21m 18s 901ms");

  expect(msToElapsedString(151200000)).toBe("1d 18h 0m 0s 0ms");
  expect(msToElapsedString(151200069)).toBe("1d 18h 0m 0s 69ms");
});
