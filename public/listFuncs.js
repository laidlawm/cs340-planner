function createList() {
    // Open list modal
    // Pull data from modal
    // Add new entry to db
    // Re-render planner template
    // Close modal
}

function updateList(list_id, new_list_title) {

}

function deleteList(list_id) {
    var list = document.querySelector(`[data-list-id="` + list_id + `"]`);
    list.remove();
    // TODO: Add back-end functionality
}
