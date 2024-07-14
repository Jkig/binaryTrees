import { useState } from 'react'
import './App.css'

let NodeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let nodeArrIndex = 0;
// I'm going to make a node array where each place where there isn't a node, I'll put a null
// this makes it a bit easier for now, I know its not efficient and doeesn't scale, but this doesn't matter, I'm only allowing small arrays for now

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

function displaySingleNode(val, look=0) {
  // for null ones, have it fade into backgorund
  // have null, normal, and highlighted
  // TODO: should have an id for each, for now just using value
  return (
    <>
      <span className={look === 0 ? "node" : look === 2 ? "highLitNode" : "nullNode"}>
        <p>{val}</p>
      </span>
    </>
  )
}

function displayNodeLayer(maxNodes) {
  // use a global node array and index to display from
  // make an array here that can put them all in a line
  let allLayers = []

  for (let i=0;i<maxNodes;i++){
    allLayers.push(displaySingleNode(maxNodes + i));
    if (maxNodes === 2 && i === 0){
      allLayers.push(displaySingleNode(null,1));
      allLayers.push(displaySingleNode(null,1));
      allLayers.push(displaySingleNode(null,1));
    }
    if (maxNodes === 4 && i != 3){
      allLayers.push(displaySingleNode(null,1));
    }
  }
  return (
    <div className='fullLayer' key={maxNodes}>
      {allLayers}
    </div>
  )

}

function displayNodes() {
  // displays all the nodes
  let layers = 4;// have this become number of layers
  let allLayers = []
  let j = 1;
  for (let i=1;i<=layers;i++){
    allLayers.push(displayNodeLayer(j));
    j*=2;
  }
  return <div>{allLayers}</div>
}


function App() {
  // select from a few basic trees to try
  // baseBinaryTree
  console.log("Fresh Reload");
  return (
    <>
      <h1>Binary Tres</h1>
      <h3>Put your tree here [{NodeArray.join(", ")}]</h3>
      <h4>Type of Traversal [dfs, bfs, etc...]. Start Traversal</h4>
      {displayNodes()}
    </>
  )
}

export default App
