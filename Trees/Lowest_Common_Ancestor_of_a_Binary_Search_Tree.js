/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let crnt = root;

    while (crnt) {
        if (p.val < crnt.val && q.val < crnt.val) crnt = crnt.left;
        else if (p.val > crnt.val && q.val > crnt.val) crnt = crnt.right;
        else return crnt;
    }
};