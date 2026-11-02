
/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const settings = options ?? {};
  const text = String(str);
  const baseCount = settings.repeatTimes ?? 1;
  const separator = settings.separator ?? '+';
  const hasAddition = Object.hasOwn(settings, 'addition');
  const addition = hasAddition ? String(settings.addition) : '';
  const additionCount = settings.additionRepeatTimes ?? 1;
  const additionSeparator = settings.additionSeparator ?? '|';
  const additionText = hasAddition ? Array(additionCount).fill(addition).join(additionSeparator) : '';

  return Array(baseCount)
    .fill(`${text}${additionText}`)
    .join(separator);
}

module.exports = {
  repeater
};
