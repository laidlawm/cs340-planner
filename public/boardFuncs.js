function createBoard() {
    // Open board modal
    // Pull data from modal
    // Add new entry to db
    // Re-render planner template
    // Close modal
}

function updateBoard(board_id, new_board_title) {

}

function deleteBoard(board_id) {
    var board = document.querySelector(`[data-board-id="` + board_id + `"]`);
    board.remove();
    // TODO: Add back-end functionality
}
