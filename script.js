let clickCounter = 0;

function updateName() {
    ++clickCounter;
    if (clickCounter % 2 != 0) {
        document.getElementById("Player1").innerHTML = document.getElementById("EnterName").value;
        document.getElementById("EnterName").value = "";
    } else {
        document.getElementById("Player2").innerHTML = document.getElementById("EnterName").value;
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
}
