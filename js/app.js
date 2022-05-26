'use strict';
const EMPTY = ' ';
const MINE = '💣';
const FLAG = '🚩';
const BASIC = '😃';
const WIN = '😎';
const LOSE = '😭';

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
var gBoard;
var gGameIsOn = true;

function initGame() {
  //This is called when page loads
  gBoard = buildBoard();
  renderBoard(gBoard, '.game-container');
  placeMines();
}

function cellClicked(elCell) {
  //Called when a cell (td) is clicked
  var cellCoord = getCellCoord(elCell.classList[1]);
  var currCell = gBoard[cellCoord.i][cellCoord.j];
  if (currCell.isMarked) return;
  if (currCell.isMine) {
    renderCell(cellCoord, MINE);
  }
  if (!currCell.isMine) {
    if (currCell.minesAroundCount > 0) {
      renderCell(cellCoord, currCell.minesAroundCount);
    } else {
      renderCell(cellCoord, EMPTY);
    }
  }
}

function cellMarked(elCell) {}

function expandShown(board, elCell, i, j) {}

// change game difficulty

function easy(btn) {
  gLevel.SIZE = 4;
  gLevel.MINES = 2;
  gBoard = buildBoard();
  renderBoard(gBoard, '.game-container');
  placeMines();
}

function medium(btn) {
  gLevel.SIZE = 8;
  gLevel.MINES = 12;
  gBoard = buildBoard();
  renderBoard(gBoard, '.game-container');
  placeMines();
}

function hard(btn) {
  gLevel.SIZE = 12;
  gLevel.MINES = 30;
  gBoard = buildBoard();
  renderBoard(gBoard, '.game-container');
  placeMines();
}

// mouse click
function mouseAction(ev) {
  console.log(ev);
  switch (ev.button) {
    case 0: // right click
      break;
    case 1:
      break;
    case 2: // left click
      // cellMarked(elCell);
      break;
  }
}
