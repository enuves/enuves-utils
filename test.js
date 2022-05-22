import test from "ava";
import { capitalize } from "./index.js";

test("capitalize first letter from a string", t => {
  t.is(capitalize("this is a string"), "This is a string");
});
