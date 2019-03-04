class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBalanced(treeRoot) {
  let maxLeft = 0;
  let maxRight = 0;

  while (ths.left) {
    maxLeft += 1;
  }

  while (ths.right) {
    maxRight += 1;
  }

  if (maxLeft - maxRight > 1) return false;
}
