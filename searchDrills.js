// Find a book
// Imagine you are looking for a book in a library with a 
// Dewey Decimal index.How would you go about it ? 
// Can you express this process as a searching algorithm ?

// We can split each digit represent different aspects of the dewey system
// ie. the first digit would be 5 to classify that its under natural sciences and mathmatics
// etc next value would signify the sub genre and so on and so forth.
// Binary search for each part.

const BinarySearchTree = require('./bst-class');

// Tree traversal
// Using your Binary Search Tree class, create a Binary Search Tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Implement in-order, pre-order, and post-order functions. Check your answers:

// A Pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// InOrder: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

const main = () => {
  const bst = new BinarySearchTree();
  bst.insert(25, 25);
  bst.insert(15, 15);
  bst.insert(50, 50);
  bst.insert(10, 10);
  bst.insert(24, 24);
  bst.insert(35, 35);
  bst.insert(70, 70);
  bst.insert(4, 4);
  bst.insert(12, 12);
  bst.insert(18, 18);
  bst.insert(31, 31);
  bst.insert(44, 44);
  bst.insert(66, 66);
  bst.insert(90, 90);
  bst.insert(22, 22);

  
  const preTraversal = (bst) => {
    console.log(bst.key);
    if (bst.left) preTraversal(bst.left);

    if (bst.right) preTraversal(bst.right);
  };

  // preTraversal(bst);
  // 25
  // 15
  // 10
  // 4
  // 12
  // 24
  // 18
  // 22
  // 50
  // 35
  // 31
  // 44
  // 70
  // 66
  // 90

  
  const inTraversal = (bst) => {
    
    if (bst.left) inTraversal(bst.left);
    console.log(bst.key);
    if (bst.right) inTraversal(bst.right);
  };

  // inTraversal(bst);
  //   4
  // 10
  // 12
  // 15
  // 18
  // 22
  // 24
  // 25
  // 31
  // 35
  // 44
  // 50
  // 66
  // 70
  // 90

  const postTraversal = (bst) => {
    
    if (bst.left) postTraversal(bst.left);
    
    if (bst.right) postTraversal(bst.right);
    console.log(bst.key);
  };

  // postTraversal(bst);
  // 4
  // 12
  // 10
  // 22
  // 18
  // 24
  // 15
  // 31
  // 44
  // 35
  // 66
  // 90
  // 70
  // 50
  // 25
};

main();