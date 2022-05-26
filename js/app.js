'use strict';
const EMPTY = ' ';
const MINE = '💣';
const FLAG = '🚩';
const BASIC = '😃';
const WIN = '😎';
const LOSE = '😭';

const gLevels = [
  {
    //easy
    SIZE: 4,
    MINES: 2,
  },
  {
    //medium
    SIZE: 8,
    MINES: 12,
  },
  {
    // hard
    SIZE: 12,
    MINES: 30,
  },
];

var gLevel = {
  SIZE: 4,
  MINES: 2,
  LIVES: 3,
};

var gGame;

var gIsClicked = false;
var gBoard;
var gLivesLeft;
var gTimerInterval;

function initGame() {
  gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
  };
  clearInterval(gTimerInterval);

  gLivesLeft = 3;
  gBoard = buildBoard();
  placeMines();
  renderBoard(gBoard, '.game-container');
}

function cellClicked(elCell) {
  if (!gGame.isTimerOn) {
    startTimer(Date.now());
    gGame.isTimerOn = true;
  }
  var cellCoord = getCellCoord(elCell.classList[1]);
  var currCell = gBoard[cellCoord.i][cellCoord.j];
  console.log(currCell);
  if (currCell.isMine) {
    renderCell(cellCoord, MINE);
    gLivesLeft--;
    if (!gLivesLeft) gameOver();
  }
  if (currCell.isMarked) return;
  if (!currCell.isMine) {
    renderCell(cellCoord, currCell.minesAroundCount);
    if (elCell.classList.contains('mark')) {
      return;
    } else {
      elCell.classList.add('mark');
    }
  }
}
//didnt work
function cellFlaged(elCell) {
  // flage the cells
  var cellCoord = getCellCoord(elCell.classList[1]);
  var currCell = gBoard[cellCoord.i][cellCoord.j];
  if (!currCell.isMarked) renderCell(cellCoord, FLAG);
  else renderCell(pos, '');
  currCell.isMarked = !gBoard[i][j].isMarked;
}

function expandShown(board, elCell, i, j) {}

function changeDifficulty(index) {
  gLevel.SIZE = gLevels[index].SIZE;
  gLevel.MINES = gLevels[index].MINES;
  gBoard = buildBoard();
  renderBoard(gBoard, '.game-container');
  placeMines();
}
function mouseAction(ev) {
  switch (ev.button) {
    case 0: // left
      break;
    case 2: // right
      break;
  }
}

function getTime(totalSecs) {
  var hour = Math.floor(totalSecs / 3600).toString();
  var minute = Math.floor((totalSecs - hour * 3600) / 60).toString();
  var seconds = (totalSecs - (hour * 3600 + minute * 60)).toString();
  return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

function startTimer(startTime) {
  var elTimerSpan = document.querySelector('.timer-span');
  var totalSecs = 0;
  var time = 0;
  gTimerInterval = setInterval(() => {
    totalSecs = Math.floor((Date.now() - startTime) / 1000);
    time = getTime(totalSecs);
    elTimerSpan.innerHTML = time;
    gGame.secsPassed++;
  }, 1000);
}

function restart() {
  var restTime = document.querySelector('.timer-span');
  var restBtn = document.querySelector('.rest');
  restBtn.innerHTML = '😃';
  initGame();
  restTime.innerText = '00:00:00';
}

function gameOver() {
  var restBtn = document.querySelector('.rest');
  restBtn.innerHTML = '😭';
  if (!gLivesLeft);
  initGame();
}
