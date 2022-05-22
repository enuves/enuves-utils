import test from "ava";
import { capitalize, prettyBytes } from "./index.js";

test("capitalize first letter from a string", t => {
  t.is(capitalize("this is a string"), "This is a string");
});

// prettyBytes
test("Convert bytes to a readable string", t => {
  t.is(prettyBytes(2659633), "2.5MB");
  t.is(prettyBytes(100475), "98.1KB");
  t.is(prettyBytes(6709), "6.6KB");
  t.is(prettyBytes(9873681), "9.4MB");
  t.is(prettyBytes(1957), "1.9KB");
  t.is(prettyBytes(76394), "74.6KB");
});
