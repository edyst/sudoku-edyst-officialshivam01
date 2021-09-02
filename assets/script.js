
const easyboard = [
    [4, 3, 6, 9, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 5, 0, 1, 9],
    [9, 0, 0, 0, 2, 0, 0, 3, 6],
    [0, 3, 0, 2, 0, 1, 7, 6, 8],
    [1, 2, 9, 8, 0, 0, 3, 0, 0],
    [0, 0, 0, 5, 3, 0, 0, 0, 0],
    [0, 0, 7, 1, 0, 9, 5, 0, 0],
    [8, 0, 0, 0, 5, 2, 0, 0, 1],
    [0, 1, 5, 0, 8, 7, 9, 0, 0],
]
const mediumboard = [
    [8, 0, 0, 7, 3, 0, 0, 1, 0],
    [0, 0, 5, 0, 0, 0, 2, 0, 6],
    [1, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 7, 0, 0, 0],
    [0, 0, 8, 9, 0, 0, 4, 0, 3],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 6, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 4, 0, 0, 9, 0, 8],
    [9, 7, 0, 8, 0, 0, 0, 6, 0]
]
const hardboard = [
    [0, 5, 0, 0, 0, 0, 4, 0, 0],
    [1, 6, 0, 8, 0, 0, 7, 0, 5],
    [4, 0, 0, 0, 0, 0, 0, 2, 6],
    [0, 4, 9, 0, 0, 0, 0, 0, 0],
    [8, 0, 5, 6, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 8, 7, 0],
    [0, 0, 0, 3, 9, 0, 0, 6, 4],
    [0, 0, 0, 0, 0, 6, 0, 1, 0],
    [9, 0, 0, 0, 2, 0, 0, 0, 0],
]

var currentDifficulty = "easy";
var currentBoard = easyboard;

function selectingDifficulty(e) {
    currentDifficulty = e.target.id;

    if (currentDifficulty == 'easy') {
        resetAllClass();
        currentBoard = easyboard;
        // setUpBoard(easyboard)
    }
    if (currentDifficulty == 'medium') {
        resetAllClass();
        // setUpBoard(mediumboard)
        currentBoard = mediumboard;
    }
    if (currentDifficulty == 'hard') {
        resetAllClass();
        // setUpBoard(hardboard)
        currentBoard = hardboard;
    }
    setUpBoard(currentBoard)
}

var difficultyLevel = document.querySelector('.difficulty');
difficultyLevel.addEventListener('click', selectingDifficulty);

function setUpBoard(board) {
    // console.log(currentDifficulty)

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            const cellIdx = (i * 9) + j + 1;
            if (board[i][j] === 0) {
                document.querySelector(`#cell-${cellIdx}`).value = "";
                document.querySelector(`#cell-${cellIdx}`).readOnly = false;
                document.querySelector(`#cell-${cellIdx}`).classList.remove("class", "fixed");
            }
            else {
                document.querySelector(`#cell-${cellIdx}`).value = board[i][j];
                document.querySelector(`#cell-${cellIdx}`).readOnly = true;
                document.querySelector(`#cell-${cellIdx}`).classList.add("class", "fixed");
            }
        }
    }
}
// document.getElementById('easy').addEventListener("click", (e) => {
//     currentDifficulty = e.target.id;
//     resetAllClass();
//     setUpBoard(easyboard);

// });
// document.getElementById('medium').addEventListener("click", (e) => {
//     currentDifficulty = e.target.id;
//     resetAllClass();
//     setUpBoard(mediumboard);
// });
// document.getElementById('hard').addEventListener("click", (e) => {
//     currentDifficulty = e.target.id;
//     resetAllClass();
//     setUpBoard(hardboard);
// });


const board = document.querySelector('#board');
// const input = board.querySelectorAll('.cells input');

function checkNumber(e) {
    var value = e.target.value;
    // console.log(value.charCodeAt(0));
    if (value.charCodeAt(value.length - 1) < 49 || value.charCodeAt(value.length - 1) > 57) {
        e.target.value = value.replace(value.charAt(value.length - 1), '');
    }
    value = e.target.value;
    if (value.length > 1) {
        e.target.value = value.replace(value.charAt(0), '');
    }

}
function colorBlue(e) {
    var value = e.target.value;
    if (e.target.value === "") {
        // console.log("blue")
        e.target.classList.remove("colorblue");
    }
    else {
        e.target.classList.add("colorblue");
    }
}

function switchCell(e) {
    // console.log("SwitchCell")
    var id = e.target.id
    var idCode = id.substring(5)
    // console.log(idCode)
    // console.log(e.keyCode)
    if (e.keyCode === 37) {
        if (idCode - 1 >= 1) {
            idCode--;
            document.querySelector(`#cell-${idCode}`).focus();
            // console.log(idCode);
        }
    }
    else if (e.keyCode === 38) {
        if (idCode - 9 >= 1) {
            idCode = idCode - 9;
            document.querySelector(`#cell-${idCode}`).focus();
            // console.log(idCode);
        }
    }
    else if (e.keyCode === 39) {
        idCode++;
        if (idCode <= '81') {
            document.querySelector(`#cell-${idCode}`).focus();
            // console.log(idCode);
        }

    }
    else if (e.keyCode === 40) {
        // console.log(idCode);
        idCode = parseInt(idCode);
        idCode += 9;
        // console.log(idCode);
        if (idCode <= 81) {
            document.querySelector(`#cell-${idCode}`).focus();
            // console.log(idCode);
        }
    }
}

function resetClassSelected() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cellIdx = (i * 9) + j + 1;
            document.querySelector(`#cell-${cellIdx}`).classList.remove("selected")
        }
    }
}

function resetAllClass() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cellIdx = (i * 9) + j + 1;
            document.querySelector(`#cell-${cellIdx}`).classList.remove("selected")
            document.querySelector(`#cell-${cellIdx}`).classList.remove("fixed")
            document.querySelector(`#cell-${cellIdx}`).classList.remove("colorblue")
            document.querySelector(`#cell-${cellIdx}`).classList.remove("repeating")

        }
    }
    removeCelebration();
    
}



function selectedCell(e) {
    resetClassSelected();

    var cellId = e.target.id.substring(5);
    var cell;
    var start;
    var end;
    if (cellId % 9 != 0) {
        var cell = (cellId % 9);
        var start = cellId - cell + 1;
        var end = start + 9;
    }
    else {
        start = cellId - 8;
        end = cellId;
    }
    // console.log(cellId);
    // console.log(cell);
    // console.log(start);
    // console.log(end);

    for (var i = start; i < end; i++) {
        document.querySelector(`#cell-${i}`).classList.add("selected");
    }
    if (cellId % 9 == 0) {
        start = 9;
    }
    else {
        start = cell;
    }

    while (start <= 81) {
        document.querySelector(`#cell-${start}`).classList.add("selected");
        start += 9;
    }

    var rowIdx = parseInt((cellId - 1) / 9) + 1
    // console.log(rowIdx)
    var colIdx = cellId - ((rowIdx - 1) * 9);
    // console.log(colIdx)
    //box-1
    if (rowIdx <= 3 && colIdx <= 3) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    //box-2
    if (rowIdx <= 3 && colIdx > 3 && colIdx <= 6) {
        for (var i = 0; i < 3; i++) {
            for (var j = 3; j < 6; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    //box-3
    if (rowIdx <= 3 && colIdx > 6 && colIdx <= 9) {
        for (var i = 0; i < 3; i++) {
            for (var j = 6; j < 9; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    if (rowIdx > 3 && rowIdx <= 6 && colIdx <= 3) {
        for (var i = 3; i < 6; i++) {
            for (var j = 0; j < 3; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    if (rowIdx > 3 && rowIdx <= 6 && colIdx > 3 && colIdx <= 6) {
        for (var i = 3; i < 6; i++) {
            for (var j = 3; j < 6; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    if (rowIdx > 3 && rowIdx <= 6 && colIdx > 6 && colIdx <= 9) {
        for (var i = 3; i < 6; i++) {
            for (var j = 6; j < 9; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    if (rowIdx > 6 && rowIdx <= 9 && colIdx <= 3) {
        for (var i = 6; i < 9; i++) {
            for (var j = 0; j < 3; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    if (rowIdx > 6 && rowIdx <= 9 && colIdx > 3 && colIdx <= 6) {
        for (var i = 6; i < 9; i++) {
            for (var j = 3; j < 6; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }
    if (rowIdx > 6 && rowIdx <= 9 && colIdx > 6 && colIdx <= 9) {
        for (var i = 6; i < 9; i++) {
            for (var j = 6; j < 9; j++) {
                var cellIdx = (i * 9) + j + 1;
                document.querySelector(`#cell-${cellIdx}`).classList.add("selected");
            }
        }
    }

}

for (var i = 1; i <= 81; i++) {
    document.querySelector(`#cell-${i}`).addEventListener("focus", selectedCell);
}

function checkRow(e) {
    var value = e.target.value;
    var cellId = e.target.id.substring(5);
    var cell;
    var start;
    var end;
    if (cellId % 9 != 0) {
        var cell = (cellId % 9);
        var start = cellId - cell + 1;
        var end = start + 9;
    }
    else {
        start = cellId - 8;
        end = cellId;
    }
    for (var i = start; i < end; i++) {
        var valueAtIdx = document.querySelector(`#cell-${i}`).value;
        if (cellId != i && value != "") {
            if (valueAtIdx == value) {
                e.target.classList.add("repeating");
                document.querySelector(`#cell-${i}`).classList.add("repeating")
            }
            // else {
            //     document.querySelector(`#cell-${i}`).classList.remove("repeating")
            // }
        }
    }
    // console.log(flag)
    // if (flag) {
    //     e.target.classList.remove("repeating")
    // }
}

function checkColumn(e) {
    console.log("Checking column")
    var value = e.target.value;
    var cellId = e.target.id.substring(5);
    var cell = cellId % 9;
    var start;
    if (cellId % 9 == 0) {
        start = 9;
    }
    else {
        start = cell;
    }

    while (start <= 81) {
        var valueAtIdx = document.querySelector(`#cell-${start}`).value
        if (cellId != start && value != "") {
            if (valueAtIdx == value) {
                document.querySelector(`#cell-${start}`).classList.add("repeating")
                e.target.classList.add("repeating");
            }
        }
        start += 9;
    }
}

function helper(e, i, j, cellId, value) {
    var cellIdx = (i * 9) + j + 1;
    var valueAtIdx = document.querySelector(`#cell-${cellIdx}`).value;
    if (cellIdx != cellId && value != "") {
        if (value == valueAtIdx) {
            document.querySelector(`#cell-${cellIdx}`).classList.add("repeating")
            e.target.classList.add("repeating")
        }
    }
}

function checkBox(e) {
    var cellId = e.target.id.substring(5)
    var value = e.target.value
    var rowIdx = parseInt((cellId - 1) / 9) + 1

    var colIdx = cellId - ((rowIdx - 1) * 9);
    //box-1
    if (rowIdx <= 3 && colIdx <= 3) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    //box-2
    if (rowIdx <= 3 && colIdx > 3 && colIdx <= 6) {
        for (var i = 0; i < 3; i++) {
            for (var j = 3; j < 6; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    //box-3
    if (rowIdx <= 3 && colIdx > 6 && colIdx <= 9) {
        for (var i = 0; i < 3; i++) {
            for (var j = 6; j < 9; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    if (rowIdx > 3 && rowIdx <= 6 && colIdx <= 3) {
        for (var i = 3; i < 6; i++) {
            for (var j = 0; j < 3; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    if (rowIdx > 3 && rowIdx <= 6 && colIdx > 3 && colIdx <= 6) {
        for (var i = 3; i < 6; i++) {
            for (var j = 3; j < 6; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    if (rowIdx > 3 && rowIdx <= 6 && colIdx > 6 && colIdx <= 9) {
        for (var i = 3; i < 6; i++) {
            for (var j = 6; j < 9; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    if (rowIdx > 6 && rowIdx <= 9 && colIdx <= 3) {
        for (var i = 6; i < 9; i++) {
            for (var j = 0; j < 3; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    if (rowIdx > 6 && rowIdx <= 9 && colIdx > 3 && colIdx <= 6) {
        for (var i = 6; i < 9; i++) {
            for (var j = 3; j < 6; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
    if (rowIdx > 6 && rowIdx <= 9 && colIdx > 6 && colIdx <= 9) {
        for (var i = 6; i < 9; i++) {
            for (var j = 6; j < 9; j++) {
                helper(e, i, j, cellId, value)
            }
        }
    }
}


function resetClassRepeating(e) {
    for (var i = 1; i <= 81; i++) {
        document.querySelector(`#cell-${i}`).classList.remove("repeating");
    }
}


function checkInput(e) {
    // console.log(e.target.id)
    resetClassRepeating(e);
    checkRow(e);
    checkColumn(e);
    checkBox(e);
}

board.addEventListener('input', (e) => {

    checkNumber(e);
    colorBlue(e);
    checkInput(e);
});
// board.addEventListener('input', colorBlue);


board.onkeydown = (e) => {
    switchCell(e);
}





//Solver 
function solve(board) {

    if (solved(board)) {
        return board
    }
    else {
        const possibilities = nextBoards(board)
        const validBoards = keepOnlyValid(possibilities)
        return searchForSolution(validBoards)
    }
}


function searchForSolution(boards) {

    if (boards.length < 1) {
        return false
    }
    else {

        var first = boards.shift()
        const tryPath = solve(first)
        if (tryPath != false) {
            return tryPath
        }
        else {
            return searchForSolution(boards)
        }
    }
}


function solved(board) {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}



function nextBoards(board) {
    var res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty != undefined) {
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 1; i <= 9; i++) {
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board) {

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] == 0) {
                return [i, j]
            }
        }
    }
}



function keepOnlyValid(boards) {

    var res = []
    for (var i = 0; i < boards.length; i++) {
        if (validBoard(boards[i])) {
            res.push(boards[i])
        }
    }
    return res
}




function validBoard(board) {

    return rowsGood(board) && columnsGood(board) && boxesGood(board)
}

function rowsGood(board) {

    for (var i = 0; i < 9; i++) {
        var cur = []
        for (var j = 0; j < 9; j++) {
            if (cur.includes(board[i][j])) {
                return false
            }
            else if (board[i][j] != 0) {
                cur.push(board[i][j])
            }
        }
    }
    return true
}

function columnsGood(board) {

    for (var i = 0; i < 9; i++) {
        var cur = []
        for (var j = 0; j < 9; j++) {
            if (cur.includes(board[j][i])) {
                return false
            }
            else if (board[j][i] != 0) {
                cur.push(board[j][i])
            }
        }
    }
    return true
}


function boxesGood(board) {
    const boxCoordinates = [[0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]]

    for (var y = 0; y < 9; y += 3) {
        for (var x = 0; x < 9; x += 3) {

            var cur = []
            for (var i = 0; i < 9; i++) {
                var coordinates = [...boxCoordinates[i]]
                coordinates[0] += y
                coordinates[1] += x
                if (cur.includes(board[coordinates[0]][coordinates[1]])) {
                    return false
                }
                else if (board[coordinates[0]][coordinates[1]] != 0) {
                    cur.push(board[coordinates[0]][coordinates[1]])
                }
            }
        }
    }
    return true
}
const answerEasy = solve(easyboard)
const answerMedium = solve(mediumboard);
const answerHard = solve(hardboard);



function validation(answer) {
   
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cellIdx = (i * 9) + j + 1;
            var inputValue = document.querySelector(`#cell-${cellIdx}`).value;
            if (inputValue != answer[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function removeCelebration() {
    var success = document.querySelectorAll('.victory')
    success.forEach((ele) => {
        ele.classList.remove("success")
    })
    var loser = document.querySelectorAll('.loser')
    loser.forEach((ele) => {
        ele.classList.remove("tryagain")
    })
}

function isSuccess(board) {
    removeCelebration();
    // console.log("isSuccess");
    var answer = solve(board)
    
    if (validation(answer)) {
        console.log("true")
        var success = document.querySelectorAll('.victory')
        success.forEach((ele) => {
            ele.classList.add("success")
        })
    }
    else {
        var loser = document.querySelectorAll('.loser')
        loser.forEach((ele) => {
            ele.classList.add("tryagain")
        })
    }
    
}

document.getElementById("validate").addEventListener("click", ()=> {
    isSuccess(currentBoard)
})

function fillSudoku(board) {
    var answer = solve(board)
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var cellIdx = (i * 9) + j + 1;
            document.querySelector(`#cell-${cellIdx}`).value = answer[i][j];
            document.querySelector(`#cell-${cellIdx}`).classList.add("colorblue");
        }
    }
}

document.getElementById("autofill").addEventListener("click", () => {
    // if (currentDifficulty == 'easy') {
    //     fillSudoku(answerEasy)
    // }
    // if (currentDifficulty == 'medium') {
    //     fillSudoku(answerMedium)
    // }
    // if (currentDifficulty == 'hard') {
    //     fillSudoku(answerHard)
    // }
    fillSudoku(currentBoard)
})


document.getElementById('reset').addEventListener('click', ()=>{
    resetAllClass();
    setUpBoard(currentBoard)
})

// board.addEventListener("input", checkInput);

