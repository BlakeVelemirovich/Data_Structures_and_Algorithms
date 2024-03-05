/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0;
    let bot = matrix.length - 1;
    let row = matrix[0].length - 1;
    let col;

    while (top <= bot) {
        col = Math.floor((bot + top) / 2);
        if (matrix[col][row] < target) top = col + 1;
        else if (matrix[col][0] > target) bot = col - 1;
        else break;
    }

    let left = 0;
    let right = matrix[0].length - 1;
    while (left <= right) {
        let row = Math.floor((left + right) / 2);
        if (matrix[col][row] > target) right = row - 1;
        else if (matrix[col][row] < target) left = row + 1;
        else return true;
    }

    return false;

};