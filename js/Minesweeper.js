'use strict';

var gBoard;
var EmptyCell = '';
var mine = '💣';
var smiley = '😊';
var smileyLoose = '🤕';
var smileyLoose = '🚩';

var gCellObj = {
  minesAroundCount: 4,
  isShown: true,
  isMine: false,
  isMarked: true,
};

var gLevel = {
  SIZE: 4,
  MINES: 2,
};

var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0,
};

function initGame() {
  gBoard = buildBoard();
  renderBoard(gBoard);
}
function buildBoard() {
  var board = [];
  for (var i = 0; i < gLevel.SIZE; i++) {
    board.push([]);
    for (var j = 0; j < gLevel.SIZE; j++) {
      board[i][j] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: false,
      };
    }
  }
  return board;
}

function renderBoard(board) {
  console.table(board);

  var strHTML = '';
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    strHTML += '<tr>';
    for (var j = 0; j < row.length; j++) {
      var className = `cell-${i}-${j}`;
      var cell = row[j];
      strHTML += `<td class="${className}" onmousedown="cellClicked(this,${i},${j},event)"></td>`;
    }
    strHTML += '<tr>';
  }
  var elBoard = document.querySelector('.board');
  elBoard.innerHTML = strHTML;
}

function setMinesNegsCount(board) {}

function cellClicked(elCell, i, j) {
  if (elCell.classList.contains('mark')) {
    return;
  }
  elCell.classList.add('selected');
}

function cellMarked() {
  for (var i = 0; i < coord.length; i++) {
    var coord = tdId;
    elCell.classList.add('mark');
  }
}

function checkGameOver() {}

function expandShown(board, elCell, i, j) {}
