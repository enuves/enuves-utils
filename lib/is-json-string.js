"use strict";

/**
 * Validate strings in JSON
 * @param {string} str - A string to validate
 * @return {boolean} true or false
 */

export function isJsonString(str){

  if(!str || typeof str !== 'string') return false;

  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
