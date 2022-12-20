import { test, expect } from "vitest";
import { tosText } from "./TOSText";

test("TOS text", async () => {
  expect(tosText).toBeTruthy();
  expect(tosText.length).toBeGreaterThanOrEqual(5);
  for (const row of tosText) {
    expect(row.length).toBeGreaterThanOrEqual(64);
    expect(row).not.toContain(" ,");
    expect(row).not.toContain("  ");
  }
});
