// /* ***************** */
// /* ----- MAIN ------ */
// /* ***************** */
// var filtered = 0;
// // Register handlebars template functions
// Handlebars.registerPartial("addCardTemplate", "addCardTemplate");
// Handlebars.registerPartial("addLabelTemplate", "addLabelTemplate");
// Handlebars.registerPartial("addListTemplate", "addListTemplate");
// Handlebars.registerPartial("boardModalTemplate", "boardModalTemplate");
// Handlebars.registerPartial("cardModalTemplate", "cardModalTemplate");
// Handlebars.registerPartial("labelModalTemplate", "labelModalTemplate");
// Handlebars.registerPartial("labelsTemplate", "labelsTemplate");
// Handlebars.registerPartial("listModalTemplate", "listModalTemplate");
// Handlebars.registerPartial("modalLabelsTemplate", "modalLabelsTemplate");
//
// // Display main content
// var mainHTML = Handlebars.templates.main();
// document.head.insertAdjacentHTML("afterend", mainHTML);
//
// var addBtns, deleteBtns, closeBtns;
// var parentBoard, parentList;
//
// // Register modals
// var addBoardModal = document.getElementById("add-board-modal");
// var addListModal = document.getElementById("add-list-modal");
// var addCardModal = document.getElementById("add-card-modal");
// var addLabelModal = document.getElementById("add-label-modal");
//
// // Register modal close buttons
// var closeBoardModal = document.getElementById("close-board-modal");
// var closeListModal = document.getElementById("close-list-modal");
// var closeCardModal = document.getElementById("close-card-modal");
// var closeLabelModal = document.getElementById("close-label-modal");
//
// // Attach correct functionality to each modal close button
// closeBoardModal.onclick = function() {
//     addBoardModal.style.display = "none";
//     document.getElementById("new-board-title").value="";
// }
// closeListModal.onclick = function() {
//     addListModal.style.display = "none";
//     document.getElementById("new-list-title").value="";
//     // TODO: Uncheck all checked boxes
// }
// closeCardModal.onclick = function() {
//     addCardModal.style.display = "none";
//     document.getElementById("new-card-title").value="";
//     document.getElementById("new-card-desc").value="";
//     // TODO: Uncheck all checked boxes
// }
// closeLabelModal.onclick = function() {
//     addLabelModal.style.display = "none";
//     document.getElementById("new-label-title").value="";
// }
//
// // Handle clicking on window when a modal is open
// window.onclick = function(event) {
//     if (event.target == addBoardModal) {
//         addBoardModal.style.display = "none";
//         document.getElementById("new-board-title").value="";
//     }
//     else if (event.target == addListModal) {
//         addListModal.style.display = "none";
//         document.getElementById("new-list-title").value="";
//         // TODO: Uncheck all checked boxes
//     }
//     else if (event.target == addCardModal) {
//         addCardModal.style.display = "none";
//         document.getElementById("new-card-title").value="";
//         document.getElementById("new-card-desc").value="";
//         // TODO: Uncheck all checked boxes
//     }
//     else if (event.target == addLabelModal) {
//         addLabelModal.style.display = "none";
//         document.getElementById("new-label-title").value="";
//     }
// }
//
// // Register modal submit buttons
// var submitBoardBtn = document.getElementById("submit-board-btn");
// submitBoardBtn.onclick = submitBoard;
// var submitListBtn = document.getElementById("submit-list-btn");
// submitListBtn.onclick = submitList;
// var submitCardBtn = document.getElementById("submit-card-btn");
// submitCardBtn.onclick = submitCard;
// var submitLabelBtn = document.getElementById("submit-label-btn");
// submitLabelBtn.onclick = submitLabel;
//
// // Stores created labels
// var labels = {};
// updateLabels();
//
// nextBID = 0;
// nextLID = 0;
// nextCID = 0;
// nextLabelID = 0;
// updateBtns(); // Initial button update for any hard coded elements
//
// // Insert placeholder values
// // insertBoard("bid-0", "School Work");
// // insertBoard("bid-1", "Daily Chores");
// // insertList("lid-0", "TO-DO", "Label", "bid-0");
// // insertList("lid-1", "DOING", "Label", "bid-0");
// // insertList("lid-2", "DONE", "Label", "bid-0");
// // insertList("lid-3", "MONDAY", "Label", "bid-1");
// // insertList("lid-4", "TUESDAY", "Label", "bid-1");
// // insertCard("cid-0", "Project Step 3 Final ", {"labelid-blank": ""}, "Turn in project step 3 final", "lid-0");
//
//
// /* ****************** */
// /* ----- BOARD ------ */
// /* ****************** */
//
// function submitBoard() {
//     var bid = "bid-" + nextBID; // Dynamically create bid
//     var board_title = document.getElementById("new-board-title").value;
//     addBoardModal.style.display = "none";
//     insertBoard(bid, board_title);
// }
//
// function insertBoard(bid, board_title) {
//     var boardContext = {
//         bid: bid,
//         board_title: board_title
//     }
//     var boardHTML = Handlebars.templates.board(boardContext);
//     document.getElementById("add-board-btn").parentElement.insertAdjacentHTML('beforebegin', boardHTML);
//     updateBtns();
//     nextBID++;
// }
//
// /* ***************** */
// /* ----- LIST ------ */
// /* ***************** */
//
// function submitList() {
//     var lid = "lid-" + nextLID; // Dynamically create lid
//     var list_title = document.getElementById("new-list-title").value;
//     // var list_label = document.getElementById("new-list-label").value;
//     var checkboxes = document.querySelectorAll("input[type=checkbox]");
//     selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked==true);
//     var list_label = [];
//     for (i = 0; i < selectedCboxes.length; i++) {
//         list_label[i] = selectedCboxes[i].value;
//     }
//     var parent_bid = parentBoard.getAttribute("data-bid");
//     addListModal.style.display = "none";
//     insertList(lid, list_title, list_label, parent_bid);
// }
//
// function insertList(lid, list_title, list_label, parent_bid) {
//     var listContext = {
//         lid: lid,
//         list_title: list_title,
//         list_label: list_label
//     }
//     var listHTML = Handlebars.templates.list(listContext);
//     var parentBoard = document.querySelector("div[data-bid=" + parent_bid + "]");
//     parentBoard.childNodes[parentBoard.childElementCount].insertAdjacentHTML('beforeend', listHTML);
//     updateBtns();
//     nextLID++;
// }
//
// /* ***************** */
// /* ----- CARD ------ */
// /* ***************** */
//
// function submitCard() { // Handles submission from card-adding modal
//     var cid = "cid-" + nextCID;
//     var card_title = document.getElementById("new-card-title").value;
//     var checkboxes = document.querySelectorAll("input[type=checkbox]");
//     selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked==true);
//     var card_label = {};
//     for (i = 0; i < selectedCboxes.length; i++) {
//         var name = selectedCboxes[i].getAttribute("name")
//         card_label[name] = selectedCboxes[i].value;
//     }
//     var card_content = document.getElementById("new-card-desc").value;
//     var parent_lid = parentList.parentElement.getAttribute("data-lid");
//     addCardModal.style.display = "none";
//     insertCard(cid, card_title, card_label, card_content, parent_lid);
// }
//
// function insertCard(cid, card_title, card_label, card_content, parent_lid) { // Handles insertion of new card into a list
//     var cardContext = {
//         cid: cid,
//         card_title: card_title,
//         card_label: card_label,
//         card_content: card_content
//     }
//     var cardHTML = Handlebars.templates.card(cardContext);
//     var parentList = document.querySelector("div[data-lid=" + parent_lid + "]");
//     parentList.childNodes[3].insertAdjacentHTML('beforeend', cardHTML);
//     updateBtns();
//     nextCID++;
// }
//
// /* ***************** */
// /* ----- LABEL ----- */
// /* ***************** */
//
// function submitLabel() {
//     var labelId = "labelid-" + nextLabelID;
//     var labelName = document.getElementById("new-label-title").value;
//     labels[labelId] = labelName;
//     var labelContext = {
//         labelid: labelId,
//         label_name: labelName
//     }
//     var labelHTML = Handlebars.templates.label(labelContext);
//     document.getElementsByClassName("add-label-btn")[0].parentElement.insertAdjacentHTML('beforebegin', labelHTML);
//     nextLabelID++;
//     if (Object.keys(labels).length == 6) {
//         document.getElementsByClassName("add-label-btn")[0].parentElement.remove();
//     }
//     addLabelModal.style.display = "none";
//     updateLabels();
//     var newLabel = document.querySelector("[data-labelid=" + labelId + "]");
//     newLabel.onclick = filter;
// }
//
// function updateLabels() {
//     var context = {
//         labels: labels
//     }
//     var modalLabelsHTML = Handlebars.templates.modalLabels(context);
//     var cardModalLables = document.getElementById("card-modal-labels");
//     while (cardModalLables.firstChild) {
//         cardModalLables.removeChild(cardModalLables.firstChild);
//     }
//     cardModalLables.insertAdjacentHTML('afterbegin', modalLabelsHTML);
//     var listModalLabels = document.getElementById("list-modal-labels");
//     while (listModalLabels.firstChild) {
//         listModalLabels.removeChild(listModalLabels.firstChild);
//     }
//     listModalLabels.insertAdjacentHTML('afterbegin', modalLabelsHTML);
// }
//
// function filter() {
//     console.log(filtered);
//     if (filtered == 0) {
//         var filterValue = this.getAttribute("data-labelid");
//         // var filteredCards = document.querySelectorAll("[data-labelid=" + filterValue + "]");
//         var hideCards = document.querySelectorAll("[class=card-label]:not([data-labelid=" + filterValue + "])");
//         for (i = 0; i < hideCards.length; i++) {
//             hideCards[i].parentElement.parentElement.style.display = "none";
//         }
//         filtered = 1;
//     }
//     else {
//         var allCards = document.querySelectorAll("[class=card]");
//         console.log("here");
//         for (i = 0; i < allCards.length; i++) {
//             allCards[i].style.display = "block";
//         }
//         filtered = 0;
//     }
// }
//
// /* ******************** */
// /* ----- BUTTONS ------ */
// /* ******************** */
//
// function updateBtns() {
//     deleteBtns = document.getElementsByClassName("delete");
//     for (i = 0; i < deleteBtns.length; i++) {
//         deleteBtns[i].onclick = function() {
//             this.parentElement.parentElement.remove();
//         }
//     }
//     addBtns = document.getElementsByClassName("add");
//     for (i = 0; i < addBtns.length; i++) {
//         addBtns[i].onclick = function() {
//             if (this.className.split(' ').includes("add-board-btn")) {
//                 addBoardModal.style.display = "block";
//             }
//             else if (this.className.split(' ').includes("add-list-btn")) {
//                 addListModal.style.display = "block";
//                 parentBoard = this.parentElement.parentElement;
//             }
//             else if (this.className.split(' ').includes("add-card-btn")) {
//                 addCardModal.style.display = "block";
//                 parentList = this.parentElement;
//             }
//             else if (this.className.split(' ').includes("add-label-btn")) {
//                 addLabelModal.style.display = "block";
//             }
//         }
//     }
//
// }
//
// /* ************ */
// /* DB FUNCTIONS */
// /* ************ */
//
// /* READ */
//
// function insertLabelFromDB(context) {
//     var html = Handlebars.templates.label(context);
//     document.getElementsByClassName('add-label-btn')[0].insertAdjacentHTML('beforebegin', html);
//     updateBtns();
// }
//
// function insertBoardFromDB(context) {
//     var html = Handlebars.templates.board(context);
//     document.getElementById("add-board-btn").parentElement.insertAdjacentHTML('beforebegin', html);
//     updateBtns();
// }
//
// function insertListFromDB(context, parent_bid) {
//     var html = Handlebars.templates.list(context);
//     var parentBoard = document.querySelector("div[data-bid=" + parent_bid + "]");
//     parentBoard.childNodes[parentBoard.childElementCount].insertAdjacentHTML('beforeend', html);
//     updateBtns();
// }
//
// function insertCard(cid, card_title, card_label, card_content, parent_lid) { // Handles insertion of new card into a list
//     var cardContext = {
//         cid: cid,
//         card_title: card_title,
//         card_label: card_label,
//         card_content: card_content
//     }
//     var cardHTML = Handlebars.templates.card(cardContext);
//     var parentList = document.querySelector("div[data-lid=" + parent_lid + "]");
//     parentList.childNodes[3].insertAdjacentHTML('beforeend', cardHTML);
//     updateBtns();
//     nextCID++;
// }
//
// function insertCardFromDB(context, parent_lid) {
//     var html = Handlebars.templates.card(context);
//     var parentList = document.querySelector("div[data-lid=" + parent_lid + "]");
//     parentList.childNodes[3].insertAdjacentHTML('beforeend', cardHTML);
//     updateBtns();
// }
//
// /* CREATE */
//
// function addLabelToDB() {
//
// }
//
// function addBoardToDB() {
//
// }
//
// function addListToDB() {
//
// }
//
// function addCardToDB() {
//
// }
