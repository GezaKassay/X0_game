let clickCounter = 0;

function updateName() {
    ++clickCounter;
    if (clickCounter % 2 != 0) {
        document.getElementById("Player1").innerHTML = 
            document.getElementById("EnterName").value;          
    } else {
        document.getElementById("Player2").innerHTML = 
            document.getElementById("EnterName").value;        
    }
    document.getElementById("EnterName").value = "";
}

let elementID;
let cells = document.getElementsByClassName("col-1");

for (let i = 0; i < cells.length; ++i) {
    cells[i].onclick = updateCellValue;
}

let idMatrix = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4",
    "7"], ["2", "5", "8"], ["3", "6", "9"], ["1", "5", "9"], ["7", "5", "3"]];

function updateCellValue() {    
    elementID = this.id;
    ++clickCounter;
    if (clickCounter % 2 != 0) {
        document.getElementById(elementID).innerHTML = "X";
    } else {
        document.getElementById(elementID).innerHTML = "0";
    }
    if (clickCounter >= 5) {          
        checkForWinner(idMatrix);        
    }   
}

function checkForWinner(matrix) {    
    for (let i = 0; i < matrix.length; ++i) {
        let matchX = 0;
        let match0 = 0;
        for (let j = 0; j < 3; ++j) {
            if (document.getElementById(matrix[i][j]).innerHTML === "X") {
                ++matchX;
            }
            if (document.getElementById(matrix[i][j]).innerHTML === "0") {
                ++match0;
            }
            if (matchX === 3) {
                document.getElementById("winnerIs").innerHTML = 
                    document.getElementById("Player1").innerHTML + " WON!";
            }
            if (match0 === 3) {
                document.getElementById("winnerIs").innerHTML = 
                    document.getElementById("Player2").innerHTML + " WON!";
            }                          
        }           
    }
}