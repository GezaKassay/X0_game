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
        checkLines(cellIDs);
        checkColumns(cellIDs);
    }
}

let cellIDs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let n = 3;

function checkLines(array) {
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
            alert(document.getElementById("Player1").innerHTML);
        }
        if (match0 === 3) {           
            alert(document.getElementById("Player2").innerHTML);
        }                          
        if (i === n - 1 && i < cellIDs.length - 1 && !(matchX === 3 || match0 === 3)) {
            matchX = 0;
            match0 = 0;
            n += 3;
        }           
    }
}

let m = 6

function checkColumns(array) {
    for (let i = 0; i <= ; ++i) {
        if (document.getElementById(array[i]).innerHTML === "X" &&) {
            ++matchX;
        }
        if (document.getElementById(array[i]).innerHTML === "0") {
            ++match0;
        }
        if (matchX === 3) {            
            alert(document.getElementById("Player1").innerHTML);
        }
        if (match0 === 3) {           
            alert(document.getElementById("Player2").innerHTML);
        }  
        alert(array[i]);         
    }

}