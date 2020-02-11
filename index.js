var currentList;
var currentBoard;

var addListModal = document.getElementById("add-list-modal");
var addListBtn = document.getElementsByClassName("add-list-btn");
var exitList = document.getElementById("close-list-modal");
for (i = 0; i < addListBtn.length; i++) {
    addListBtn[i].onclick = function() {
        addListModal.style.display = "block";
        currentBoard = this.parentElement.parentElement;
    }
}
exitList.onclick = function() {
  addListModal.style.display = "none";
  document.getElementById("new-list-title").value="";
}


var addCardModal = document.getElementById("add-card-modal");
var addCardBtns= document.getElementsByClassName("add-card-btn");
var exitCard = document.getElementById("close-card-modal");
for (i = 0; i < addCardBtns.length; i++) {
    addCardBtns[i].onclick = function() {
        addCardModal.style.display = "block";
        currentList = this.parentElement.parentElement;
    }
}
exitCard.onclick = function() {
    addCardModal.style.display = "none";
    document.getElementById("new-card-title").value="";
    document.getElementById("new-card-desc").value="";
}

// Board modal
var addBoardModal = document.getElementById("add-board-modal");
var addBoardBtn = document.getElementById("add-board-btn");
var exitBoardModal = document.getElementById("close-board-modal");
addBoardBtn.onclick = function() {
    addBoardModal.style.display = "block";
}
exitBoardModal.onclick = function() {
    addBoardModal.style.display = "none";
    document.getElementById("new-board-title").value="";
}

window.onclick = function(event) {
  if (event.target == addListModal) {
    addListModal.style.display = "none";
    document.getElementById("new-list-title").value="";
  }
  else if (event.target == addCardModal) {
      addCardModal.style.display = "none";
      document.getElementById("new-card-title").value="";
      document.getElementById("new-card-desc").value="";
  }
  else if (event.target == addBoardModal) {
      addBoardModal.style.display = "none";
      document.getElementById("new-board-title").value="";
  }
}

var removeListBtns = document.getElementsByClassName("delete-list");
for (i = 0; i < removeListBtns.length; i++) {
    removeListBtns[i].onclick = function() {
        this.parentElement.remove();
    }
}

var removeCardBtns = document.getElementsByClassName("delete-card");
for (i = 0; i < removeCardBtns.length; i++) {
    removeCardBtns[i].onclick = function() {
        this.parentElement.remove();
    }
}

//var lists = document.getElementsByClassName("lists")[0];
var submitList = document.getElementById("new-list-submit");
submitList.onclick = addList
function addList() {

    var newList = document.createElement("div");
    newList.classList.add("list-wrapper");

    var newSpan = document.createElement("span");
    newSpan.classList.add("delete-list", "close");
    newSpan.innerHTML = "&times;";
    newSpan.onclick = function() {
        this.parentElement.remove();
    }

    var newH2 = document.createElement("h2");
    newH2.classList.add("list-title");
    newH2.innerHTML = document.getElementById("new-list-title").value;

    var newListBody = document.createElement("div");
    newListBody.classList.add("list-body");

    var newCardAdd = document.createElement("div");
    newCardAdd.classList.add("card-wrapper", "card-add");

    var newCardAddBtn = document.createElement("span");
    newCardAddBtn.classList.add("add-card-btn", "close");
    newCardAddBtn.innerHTML = "&plus;";
    newCardAddBtn.onclick = function() {
        addCardModal.style.display = "block";
        currentList = this.parentElement.parentElement;
    }

    var newH3 = document.createElement("h3");
    newH3.classList.add("card-title");
    newH3.appendChild(document.createTextNode("(NEW CARD)"));

    newCardAdd.appendChild(newCardAddBtn);
    newCardAdd.appendChild(newH3);
    newListBody.appendChild(newCardAdd);
    newList.appendChild(newSpan);
    newList.appendChild(newH2);
    newList.appendChild(newListBody);

    currentBoard.appendChild(newList);

    addListModal.style.display = "none";
    document.getElementById("new-list-title").value="";
}

var submitCard = document.getElementById("new-card-submit");
submitCard.onclick = createCard;
function createCard() {

    var card = document.createElement("div");
    card.classList.add("card-wrapper");

    var span = document.createElement("span");
    span.classList.add("delete-card", "close");
    span.innerHTML = "&times;";
    span.onclick = function() {
        this.parentElement.remove();
    }

    var h3 = document.createElement("h3");
    h3.classList.add("card-title");
    h3.innerHTML = document.getElementById("new-card-title").value;

    var p = document.createElement("p");
    p.classList.add("card-content");
    p.innerHTML = document.getElementById("new-card-desc").value;

    card.appendChild(span);
    card.appendChild(h3);
    card.appendChild(p);

    currentList.appendChild(card);

    addCardModal.style.display = "none";
    document.getElementById("new-card-title").value="";
    document.getElementById("new-card-desc").value="";

}

// Remove board
function removeBoard() {
    this.parentElement.remove();
}
var removeBoardBtn = document.getElementsByClassName("remove-board-btn");
for (i = 0; i < removeBoardBtn.length; i++) {
    removeBoardBtn[i].onclick = removeBoard;
}

// Add board
var submitBoardBtn = document.getElementById("new-board-submit");
submitBoardBtn.onclick = function() {

    var board = document.createElement("div");
    board.classList.add("lists");

    var span = document.createElement("span");
    span.classList.add("remove-board-btn", "close");
    span.innerHTML = "&times;";
    span.onclick = removeBoard;

    var h2 = document.createElement("h3");
    h2.innerHTML = document.getElementById("new-board-title").value;

    board.appendChild(span);
    board.appendChild(h2);

    document.body.appendChild(board);
    currentBoard = board;

    // add new empty list

    var list = document.createElement("div");
    list.classList.add("list-wrapper", "list-add");

    var btn = document.createElement("span");
    btn.classList.add("add-list-btn", "close");
    btn.innerHTML = "&plus;";
    btn.onclick = function() {
        addListModal.style.display = "block";
        currentBoard = this.parentElement.parentElement;
    }

    var header = document.createElement("h3");
    header.classList.add("list-title");
    header.innerHTML = "(NEW LIST)";

    list.appendChild(btn);
    list.appendChild(header);
    board.appendChild(list);

    addBoardModal.style.display = "none";
    document.getElementById("new-board-title").value="";

}

// function newList(title)
// function newListAdd()
// function newCard(title, desc, date, ...)
// function newCardAdd()
// function newBoard(title)
// function newBoardAdd()
