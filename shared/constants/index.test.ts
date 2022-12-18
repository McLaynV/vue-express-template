import {test, expect} from "vitest";
import {API_PREFIX} from "./index";

test('constants index', async () => {
    expect(API_PREFIX).toBeTruthy();
    expect(API_PREFIX).toContain("/");
});
