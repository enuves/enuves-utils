"use strict";

/** Return array without duplicates
 * @param {array} array - A Array to check duplicates
 *
*/

export function uniqueArray(array){

  if(!Array.isArray(array)) throw new TypeError(`array must be a Array, but a ${typeof array}`);

  // https://gist.github.com/telekosmos/3b62a31a5c43f40849bb?permalink_comment_id=2341219#gistcomment-2341219

  return Array.from(new Set(array.map(item => JSON.stringify(item)))).map(value => JSON.parse(value));
}
