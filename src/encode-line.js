
/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const characters = Array.from(str);
  let encoded = '';

  for (let index = 0; index < characters.length; ) {
    let end = index + 1;
    while (end < characters.length && characters[end] === characters[index]) end += 1;
    const count = end - index;
    encoded += `${count > 1 ? count : ''}${characters[index]}`;
    index = end;
  }

  return encoded;
}

module.exports = {
  encodeLine
};
