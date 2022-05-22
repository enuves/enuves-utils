"use strict";

/**
 * Capitalize first letter from a string
 * @param {string} text - string
 */

export function capitalize(text) {

    if(typeof text !== "string") new TypeError("text must be a string");

    return text.length > 0 ? text.charAt(0).toUpperCase() + text.substring(1).toLowerCase() : "";

}
