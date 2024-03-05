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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    let [que, ans] = [[root], []];

    while (que[0]) {
        let [qlen, row] = [que.length, []];

        for (i = 0; i < qlen; i++) {
            let crnt = que.shift();
            row.push(crnt.val);
            if (crnt.left) que.push(crnt.left);
            if (crnt.right) que.push(crnt.right);
        }
        ans.push(row);
    }
    return ans;
};