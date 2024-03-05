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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var compareTrees = function(root, subRoot) {

    if (!root && !subRoot) return true;
    else if (root && subRoot && root.val === subRoot.val) {
        return (compareTrees(root.left, subRoot.left) && compareTrees(root.right, subRoot.right));
    }
    else return false;

}

var isSubtree = function(root, subRoot) {
    
    if (!root) return false;
    if (!subRoot) return true;

    if (compareTrees(root, subRoot)) return true;
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
}