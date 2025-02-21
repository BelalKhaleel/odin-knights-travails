# Assignment: Knight's Travails

## Objective

Your task is to build a function `knightMoves` that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

```javascript
knightMoves([0,0],[1,2]) // => [[0,0],[1,2]]
```

Sometimes there is more than one fastest path. Examples of this are shown below. Any answer is correct as long as it follows the rules and gives the shortest possible path.

```javascript
knightMoves([0,0],[3,3]) // => [[0,0],[2,1],[3,3]]
// or
knightMoves([0,0],[3,3]) // => [[0,0],[1,2],[3,3]]

knightMoves([3,3],[0,0]) // => [[3,3],[2,1],[0,0]]
// or
knightMoves([3,3],[1,2],[0,0])

knightMoves([0,0],[7,7])
// => [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]
// or
// => [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
```

## Instructions

1. **Understand the board and knight's movement rules:**

   - The knight moves in an "L" shape: two squares in one direction and one square perpendicular, or vice versa.
   - The board is an 8x8 grid with coordinates from [0,0] to [7,7].
   - Do not allow moves to go off the board.

2. **Choose a suitable data structure:**

   - For every square, there are several possible moves. Use a data structure that allows you to efficiently track visited squares and possible moves.

3. **Select the appropriate search algorithm:**

   - Hint: Since the board is finite and the goal is to find the shortest path, consider using a Breadth-First Search (BFS). Depth-First Search (DFS) may be inefficient as it could get stuck in long, unnecessary paths.

4. **Find the shortest path:**

   - Use the chosen algorithm to find the shortest path between the starting square (or node) and the ending square.
   - Output what that full path looks like.

Example:

```javascript
knightMoves([3,3],[4,3])
// => You made it in 3 moves! Here's your path:
//    [3,3]
//    [4,5]
//    [2,4]
//    [4,3]
```

---

✅ **Key Takeaways:**

- Ensure the knight’s movement rules are followed.
- Use a BFS algorithm to guarantee finding the shortest path.
- Track visited squares to avoid cycles.
- Output the path clearly and in order!

Happy coding! 🚀
