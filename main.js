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
    // create a queue and add starting position
    const queue = [new Node(start)];
    const visited = new Set();
    visited.add(start.toString()); // using string to compare arrays. Otherwise it bugs

    const directions = [
        [-2, -1], [-1, -2], // bottom left
        [1, -2], [2, -1], // bottom right
        [-2, 1], [-1, 2], // top left
        [1, 2], [2, 1], // top right
    ]
}