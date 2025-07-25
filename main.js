// chess board goes from [0, 0] to [7, 7]
// knight possible moves [x, y]:
// [-2, -1] & [-1, -2] bottom left
// [+1, -2] & [+2, -1] bottom right
// [-2, +1] & [-1, +2] top left
// [+1, +2] & [+2, +1] top right

function Node(position, path = []){
    this.position = position; // current position
    this.path = [...path, position] // tracks the path taken
}

function knightMoves(start, goal) {
    if (!Array.isArray(start) || !Array.isArray(goal) || start.length !== 2 || goal.length !== 2) {
        throw new Error('Start and goal must be [x, y] arrays');
    }

    // create a queue and add starting position
    const queue = [new Node(start)];
    const visited = new Set();
    let currentVertex; // this is the knight's current position
    visited.add(start.toString()); // using string to compare arrays. Otherwise it bugs

    // 8 possible knight moves
    const directions = [ 
        [-2, -1], [-1, -2], // bottom left
        [1, -2], [2, -1], // bottom right
        [-2, 1], [-1, 2], // top left
        [1, 2], [2, 1], // top right
    ]

    while(queue.length) {
        currentVertex = queue.shift(); // exclude last visited position from queue and return the array

        // check for the goal
        if (currentVertex.position[0] === goal[0] && currentVertex.position[1] === goal[1]) {
            console.log(`You made it in ${currentVertex.path.length - 1} Moves!`);
            console.log(currentVertex.path);
            return {
                path: currentVertex.path, // path array. Visited nodes
                moves: currentVertex.path.length - 1 // number of moves = path length - 1
            };
        }

        // this is the visiting traversal
        for (const direction of directions) {
            const newX = currentVertex.position[0] + direction[0];
            const newY = currentVertex.position[1] + direction[1];

            // if X and y are >= than 0 and less than 8, the move is valid
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                const newPositionString = [newX, newY].toString(); // array containing X and Y

                if (!visited.has(newPositionString)) { // if position hasnt been visited...
                    visited.add(newPositionString) // add to visited
                    // create new node with updated path
                    const newNode = new Node([newX, newY], [...currentVertex.path, [newX, newY]]) // extend path

                    queue.push(newNode); // enqueue
                }

            };
        }
    }
}
console.log('distant position:')
knightMoves([0, 0], [5, 6]); // distant position
console.log('same position:')
knightMoves([0, 0], [0, 0]); // same position
console.log('close position')
knightMoves([0, 0], [1, 1]); // close position
// error trials
// knightMoves([12, 9, 3], [1, 1]);
