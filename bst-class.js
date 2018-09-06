class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  // insert

  insert(key, value) {
    // if it's empty, insert into the root
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    // if it exists, start at the root & compare to the key. if the key < node's key, put new node in the left branch
    else if (key < this.key) {
      // no left child? (left ptr is empty) -> instantiate and insert the new node as the left child, pass 'this' as the parent
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      // if it has an existing child, recursively call the 'insert' method so it's added further down the tree
      else {
        this.left.insert(key, value);
      }
    } 
    // if the key > node's key, same thing but on the right
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  // find

  find(key) {
    // if the item is found at the root, return that value
    if (this.key == key) {
      return this.value;
    }
    // if the item is less than the root, follow left child -> if there is an exisiting left child, recursively check left and/or right child until you find it
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    // if the item is greater than the root, follow the right child -> recursively check its left and/or right child until you find it
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // it's not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  // remove

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      // if the node only has a left child, replace the node w/ its left child
      else if (this.left) {
        this._replaceWith(this.left);
      }
      // if it only has a right child, replace it with its right child
      else if (this.right) {
        this._replaceWith(this.right);
      }
      // if it has no children, remove it and any references to it by calling 'this._replaceWith(null);'
      else {
        this._replaceWith(null);
      }
    } 
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  // helpers

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

module.exports = BinarySearchTree;