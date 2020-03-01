function createCard() {
    // Open card modal
    // Pull data from modal
    // Add new entry to db
    // Re-render planner template -> location.reload
    // Close modal
}

function updateCard(card_id, new_card_title) {

}

function deleteBoard(card_id) {
    var card = document.querySelector(`[data-card-id="` + card_id + `"]`);
    card.remove();
    // TODO: Add back-end functionality
}
