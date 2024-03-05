/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var dfs = function(root, min, max) {

    if (root === null) return true;
    if (root.val >= max) return false;
    if (root.val <= min) return false;

    return isValidBST(root, min, max);
}

var isValidBST = function(root, min = -Infinity, max = Infinity) {
    
    return (dfs(root.left, min, root.val) && dfs(root.right, root.val, max));
};