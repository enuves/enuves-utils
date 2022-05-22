"use strict";

const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
/**
 * Convert bytes to a readable string
 * @param {number} bytes - A numeric value
 *
 * @typedef {{separator: string, suffix: string}} Options
 * @param {Options} [options] -  A object value parameters
 */

export function prettyBytes(bytes, options = {}){

  if(!Number.isFinite(bytes)) throw new TypeError("bytes must be a finite number");

  const {
    separator = "",
    suffix = ""
  } = options;
  if (bytes === 0) return 'n/a';

  const expoent = Math.min(parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10), sizes.length - 1);
  if (expoent === 0) return `${bytes} ${sizes[expoent]}`
  return `${(bytes / (1024 ** expoent)).toFixed(expoent ? 1 : 0)}${separator}${sizes[expoent]}${suffix}`;

}
