
/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const deleted = Array(arr.length).fill(false);
  const extraCopies = Array(arr.length).fill(0);
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const command = arr[index];

    if (command === '--discard-next') {
      if (index + 1 < arr.length) deleted[index + 1] = true;
      continue;
    }

    if (command === '--double-next') {
      if (index + 1 < arr.length && !deleted[index + 1]) extraCopies[index + 1] += 1;
      continue;
    }

    if (command === '--discard-prev' || command === '--double-prev') {
      for (let resultIndex = result.length - 1; resultIndex >= 0; resultIndex -= 1) {
        if (result[resultIndex].index !== index - 1) continue;
        if (command === '--discard-prev') result.splice(resultIndex, 1);
        else result.push(result[resultIndex]);
        break;
      }
      continue;
    }

    if (deleted[index]) continue;
    for (let copy = 0; copy <= extraCopies[index]; copy += 1) result.push({ index, value: arr[index] });
  }

  return result.map(({ value }) => value);
}

module.exports = {
  transform
};
