let clickCounter = 0;

function updateName() {
    ++clickCounter;
    if (clickCounter % 2 != 0) {
        document.getElementById("Player1").innerHTML = 
        document.getElementById("EnterName").value;
        document.getElementById("EnterName").value = "";
    } else {
        document.getElementById("Player2").innerHTML = 
        document.getElementById("EnterName").value;
        document.getElementById("EnterName").value = "";
    }
}

let elementID;
let cells = document.getElementsByClassName("col-1");

for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = updateCellValue;
}

function updateCellValue() {    
    elementID = this.id;
    ++clickCounter;
    if (clickCounter % 2 != 0) {
        document.getElementById(elementID).innerHTML = "X";
    } else {
        document.getElementById(elementID).innerHTML = "0";
    }
    if (clickCounter >= 5) {
        n = 3;
        m = 3;
        o = 3;
        checkLine(lineIDs);
        checkColumn(columnIDs);
        checkDiagonal(diagonalIDs);
    }   
}

let lineIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let columnIDs = ["1", "4", "7", "2", "5", "8", "3", "6", "9"];
let diagonalIDs = ["1", "5", "9", "7", "5", "3"];
let n = 3;
let m = 3;
let o = 3;

function checkLine(array) {
    let matchX = 0;
    let match0 = 0;
    for (let i = 0; i < n; ++i) {
        if (document.getElementById(array[i]).innerHTML === "X") {
            ++matchX;
        }
        if (document.getElementById(array[i]).innerHTML === "0") {
            ++match0;
        }
        if (matchX === 3) {            
            document.getElementById("winnerIs").innerHTML = document.getElementById("Player1").innerHTML + " WON!";
        }
        if (match0 === 3) {           
            document.getElementById("winnerIs").innerHTML = document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === n - 1 && i < lineIDs.length - 1 && !(matchX === 3 || match0 === 3)) {
            matchX = 0;
            match0 = 0;
            n += 3;
        }           
    }
}

function checkColumn(array) {
    let matchColumnX = 0;
    let matchColumn0 = 0;
    for (let i = 0; i < m; ++i) {
        if (document.getElementById(array[i]).innerHTML === "X") {
            ++matchColumnX;
        }
        if (document.getElementById(array[i]).innerHTML === "0") {
            ++matchColumn0;
        }
        if (matchColumnX === 3) {            
            document.getElementById("winnerIs").innerHTML = document.getElementById("Player1").innerHTML + " WON!";
        }
        if (matchColumn0 === 3) {           
            document.getElementById("winnerIs").innerHTML = document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === m - 1 && i < columnIDs.length - 1 && !(matchColumnX === 3 || matchColumn0 === 3)) {
            matchColumnX = 0;
            matchColumn0 = 0;
            m += 3;
        }           
    }
}

function checkDiagonal(array) {
    let matchDiagonalX = 0;
    let matchDiagonal0 = 0;
    for (let i = 0; i < o; ++i) {
        if (document.getElementById(array[i]).innerHTML === "X") {
            ++matchDiagonalX;
        }
        if (document.getElementById(array[i]).innerHTML === "0") {
            ++matchDiagonal0;
        }
        if (matchDiagonalX === 3) {            
            document.getElementById("winnerIs").innerHTML = document.getElementById("Player1").innerHTML + " WON!";
        }
        if (matchDiagonal0 === 3) {           
            document.getElementById("winnerIs").innerHTML = document.getElementById("Player2").innerHTML + " WON!";
        }                          
        if (i === o - 1 && i < diagonalIDs.length - 1 && !(matchDiagonalX === 3 || matchDiagonal0 === 3)) {
            matchDiagonalX = 0;
            matchDiagonal0 = 0;
            o += 3;
        }           
    }
}