// knightMoves(start, target):
//     queue = [[start, [start]]]  # Store position + path
//     visited = set()  # Track visited squares

//     while queue is not empty:
//         (current, path) = queue.dequeue()  # Get next square to explore

//         if current == target:
//             return path  # Shortest path found!

//         for each possible move (L-shape move):
//             new_position = (current.x + dx, current.y + dy)

//             if new_position is within bounds AND not in visited:
//                 visited.add(new_position)
//                 queue.enqueue([new_position, path + [new_position]])

//     return "No path found"  # This should never happen on an 8x8 board

/**
 * Finds the shortest path for a knight's move.
 * @param {number[]} start - The starting position [x, y].
 * @param {number[]} target - The target position [x, y].
 * @returns {number[][]} The shortest path as an array of coordinates.
 */
function knightMoves(start, target) {
  if (start[0] === target[0] && start[1] === target[1]) {
    console.log("You're already at the target!");
    return [start];
  }
  const queue = [{ position: start, parent: null }];
  const visited = new Set();
  visited.add(start.join(","));
  const moves = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
  ];

  while (queue.length > 0) {
    const newParent = queue.shift();
    const [x, y] = newParent.position;

    for (const [dx, dy] of moves) {
      const [newX, newY] = [x + dx, y + dy];

      if (isValid(newX, newY) && !visited.has(`${newX},${newY}`)) {
        const nextMove = { position: [newX, newY], parent: newParent };
        queue.push(nextMove);
        visited.add(`${newX},${newY}`);

        if (newX === target[0] && newY === target[1]) {
          return reconstructPath(nextMove);
        }
      }
    }
  }
}

function isValid(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function reconstructPath(node) {
  const path = [];
  while (node) {
    path.push(node.position);
    node = node.parent;
  }
  path.reverse()
  console.log(`=> You made it in ${path.length - 1} moves!  Here's your path:`);
  path.forEach((step) => console.log(step));
  return path;
}

knightMoves([0, 0], [7, 7]); // == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
