// This function finds all possible paths from node 0 to node n - 1 in a directed acyclic graph (DAG)
// graph: an array of arrays, where graph[i] is a list of nodes you can visit from node i
function allPathsSourceTarget(graph) {
    // Create a variable to store the paths
    let paths = [];
    // Create a helper function to find all paths from node u to node n - 1
    function dfs(u, path) {
        // If node u is equal to node n - 1, add the path to the result
        if (u === graph.length - 1) {
            paths.push(path);
            return;
        }
        // Iterate over the nodes v that can be visited from node u
        for (let v of graph[u]) {
            // Recursively call the helper function with node v and the extended path
            dfs(v, path.concat(v));
        }
    }
    // Call the helper function with node 0 and an initial path [0]
    dfs(0, [0]);
    // Return the paths
    return paths;
}

// Test the function with sample input
let graph = [[1,2],[3],[3],[]]

console.log(allPathsSourceTarget(graph)); // expected output: [[0,1,3],[0,2,3]]
