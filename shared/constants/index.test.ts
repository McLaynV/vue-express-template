import { test, expect } from "vitest";
import {
  PATH_SPEEDRUN_SUBMIT,
  PATH_SPEEDRUN_SUBMIT_SUFFIX,
  PATH_SPEEDRUNS,
} from "./index";

test("constants index", async () => {
  for (const c of [
    PATH_SPEEDRUNS,
    PATH_SPEEDRUN_SUBMIT_SUFFIX,
    PATH_SPEEDRUN_SUBMIT,
  ]) {
    expect(c).toBeTruthy();
    expect(c).toContain("/");
  }
});
