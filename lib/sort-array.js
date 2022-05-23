"use strict";

/** Sort a object array by property
 * @param {Array} array - A Array to sort
 * @param {string} property - The string to a object property
 */

export function sortArray(array, property){

  if(!Array.isArray(array)) throw new TypeError(`array must be a Array, but a ${typeof array}`);

return array.sort((a,b) => {

  if(a[property] === null || a[property] === 'null') a[property] = '';
  if(b[property] === null || b[property] === 'null') b[property] = '';

  return a[property].toUpperCase() > b[property].toUpperCase() ? 1 : a[property].toUpperCase() === b[property].toUpperCase() ? 0 : -1;
});

}
