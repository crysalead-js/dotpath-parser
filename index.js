/**
 * Splits a dotted path string into an Array of keys where string keys represent Object properties
 * while integer keys represent Array indices.
 *
 * @param   input The dotted string path
 * @returns Array An array of keys
 * @throws  Error
 */
module.exports = function(path) {
  var keys = [];
  if (typeof path === 'number') {
    return [path];
  }
  if (!path) {
    return keys;
  }
  var parts = path.split('.');

  for (var i = 0, len = parts.length; i < len; i++) {
    var key = parts[i];
    var intKey = Number(key);

    if (isNaN(intKey)) {
      keys.push(key);
    } else {
      keys.push(intKey);
    }
  }
  return keys;
}
