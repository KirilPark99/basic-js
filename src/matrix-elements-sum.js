
/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const blockedColumns = [];
  let sum = 0;

  for (const row of matrix) {
    for (let column = 0; column < row.length; column += 1) {
      if (blockedColumns[column]) continue;
      if (row[column] === 0) blockedColumns[column] = true;
      else sum += row[column];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
