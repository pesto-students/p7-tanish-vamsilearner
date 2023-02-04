// This function determines if a path exists from a source node to a destination node in a graph
// represented by an adjacency list. 
function isPathExists(n, edges, source, destination) {
    // Create an adjacency list to store the graph
    // Array.from creates an array of the specified length, and fills it with the value returned
    // by the function passed as the second argument. In this case, the function returns an empty array.
    let graph = Array.from({ length: n }, () => []);
    
    // Add each edge to the graph by adding the destination node to the list of adjacent nodes of the source node
    // and vice versa to create an undirected graph.
    for (let [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
  
    // Use BFS to check if there is a path from source to destination
    // Initialize the queue with the source node
    let queue = [source];
    // Keep track of visited nodes to avoid visiting the same node multiple times
    let visited = new Set();
    // Continue the loop as long as the queue is not empty
    while (queue.length) {
      // Dequeue the first node from the queue
      let u = queue.shift();
      // If the node is the destination node, return true
      if (u === destination) return true;
      // Mark the node as visited
      visited.add(u);
      // Enqueue all unvisited adjacent nodes
      for (let v of graph[u]) {
        if (!visited.has(v)) queue.push(v);
      }
    }
  
    // Return false if there is no path from source to destination
    return false;
  }
  
  // Test the function with sample input
  let n = 4; // Number of nodes
  let edges = [[0, 1], [0, 2], [1, 3], [2, 3]]; // Edges in the graph
  let source = 0; // Source node
  let destination = 3; // Destination node
  
  console.log(isPathExists(n, edges, source, destination));  // expected output: true
