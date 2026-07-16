/**
 * 133. Clone Graph
Medium

Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). 
For example, the first node with val == 1, the second node with val == 2, and so on. 

The graph is represented in the test case using an adjacency list.
An adjacency list is a collection of unordered lists used to represent a finite graph. 
Each list describes the set of neighbors of a node in the graph.
The given node will always be the first node with val = 1. 
You must return the copy of the given node as a reference to the cloned graph.

Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]

Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).



Example 2:
Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

Example 3:
Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.


Constraints:
The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.
There are no repeated edges and no self-loops in the graph.
The Graph is connected and all nodes can be visited starting from the given node.

 */



function _Node(val, neighbors) {
	this.val = val === undefined ? 0 : val;
	this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
	let nodeArray = [];
	let neighborsMap = new Map();

	const loop = (currentNode) => {
		if (currentNode && currentNode.val){
			if (currentNode && (neighborsMap.get(currentNode.val) || []).length > 0){
				return;
			}
			nodeArray.push(new _Node(currentNode.val))
		}else{
			return new _Node()
		}

		if (currentNode && currentNode.neighbors && currentNode.neighbors['length'] > 0){
			neighborsMap.set(currentNode.val, currentNode.neighbors.map(it => it.val))
			currentNode.neighbors.forEach((item) => {
				loop(item)
			})
		}else{
			neighborsMap.set(currentNode.val, [])
		}
	}

	loop(node);
	
	// let root = nodeArray.shift();
	console.log(neighborsMap)

	nodeArray.forEach(item => {
		console.log("item.neighbors === ",  neighborsMap.get(item.val))
		item.neighbors = [...neighborsMap.get(item.val)].map(it => {
			return nodeArray.filter(node => node.val === it)[0]
		});
		console.log("item === ", item)
	})

	console.log(nodeArray,)
	return nodeArray[0];

};

// better solution
var cloneGraph2 = function (node) {
	if(!node) return null

	const cloneMap = new Map()

	const dfs = (original) => {

		if(cloneMap.has(original.val)){
			console.log('has', original.val, 'return and no dfs')
			return cloneMap.get(original.val)
		}

		const cloned = new _Node(original.val);
		cloneMap.set(original.val, cloned);
		console.log('map === ', cloneMap)

		cloned.neighbors = original.neighbors.map(item => {
			console.log('item == ', item)
			return dfs(item)
		})
		return cloned;
	}

	return dfs(node)

}


const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// node1 is the entry point into the graph
let graphNode = node1;


// const result = cloneGraph(graphNode)
const result = cloneGraph2(graphNode)
console.log('result === ', result)
