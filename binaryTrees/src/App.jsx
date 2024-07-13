import { useState } from 'react'
import './App.css'

// let NodeArray = [1,2,3];

class treeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  // I think I'll evenutally put rebalance here
}

// make a function to build binary trees from several types of traversals, and return the first node
// make functions that convert all traversals to all others, and try to show off how that happens
// display the nodes

function displaySingleNode(val) {
  // for null ones, have it fade into backgorund
  return (
    <>
      <span className="node">
        <p>{val}</p>
      </span>
    </>
  )
}

function displayNodeLayer(maxNodes) {
  // use a global node array and index to display from
  return (
    <div className='fullLayer' key={maxNodes}>
      {displaySingleNode(maxNodes)}
    </div>
  )

}

function displayNodes() {
  // displays all the nodes
  let layers = 2;// have this become number of layers
  let allLayers = []

  for (let i=0;i<layers;i++){
    allLayers.push(displayNodeLayer(i));
  }
  return <div>{allLayers}</div>
}


function App() {
  // select from a few basic trees to try
  // baseBinaryTree

  return (
    <>
      <h1>Binary Tres</h1>
      <h3>Put your tree here [1,2,3]</h3>
      <h4>Type of Traversal [inorder others?]</h4>
      {displayNodes()}
    </>
  )
}

export default App
