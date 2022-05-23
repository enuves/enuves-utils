import test from "ava";
import { capitalize, isJsonString, prettyBytes, sortArray, uniqueArray } from "./index.js";

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

// uniqueArray

test("Return array without duplicates", t=> {
  t.deepEqual(uniqueArray([1,3,7,3,1]), [1,3,7]);
  t.deepEqual(uniqueArray([...['a', 'b', 'c'], ...['c', 'g', 'a']]), ['a','b','c','g']);
  t.deepEqual(uniqueArray([{a:1,b:2}, 3,4, {a:1, b:2}]), [{a:1,b:2}, 3, 4]);
  t.deepEqual(uniqueArray(['a', 'b', 'c', 'b', 'd']), ['a','b','c','d']);
});

//sortArray
test("Sort a object array by property", t => {
  t.deepEqual(sortArray([{x: '1', y: '2'}, {x:'-5', y:'15'}], 'x'), [{ x: '-5', y: '15' }, { x: '1', y: '2' }]);
});

// isJsonString
test("Validate strings in JSON", t => {
  let json = JSON.stringify({x: 2, y: 25});
  t.is(isJsonString(json), true);
  t.is(isJsonString('hello'), false);
});
