// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    //grab id to work with
    let grid_element = document.getElementById('grid');
    console.log(grid_element);
    //case where we just started and the only roll so the only cell
    if(numRows == 0) {
        let first_row = grid_element.insertRow();
        let first_cell = first_row.insertCell(0);
        console.log("Added first row and cell");
    }
    else{
        // For each new row, insert cells
        let new_row = grid_element.insertRow();
        //when adding the cells that makeup the row, need to add the proper amount which is indicative
        //of # of cols which we get from that first row
        let colsInFirstRow = grid_element.rows[0] ? grid_element.rows[0].cells.length : 0;
        numCols = colsInFirstRow;
        //can only work in correspondence with numCols, so need to implement that
        for (let i = 0; i < numCols; i++) {
            let other_cell = new_row.insertCell(i);
        }
    }
    numRows++;
}

// Add a column
function addC() {
    //grab table and get amount of rows to add correct number of cells in each addition of column
    let grid_element = document.getElementById('grid');
    let rows = grid_element.rows;
    //if no rows present, will be first column and row
    if (rows.length === 0) {
        let new_row = grid_element.insertRow();
        let new_cell = new_row.insertCell(0); 
    }
    else{
    // Add a cell to each existing row
    for (let i = 0; i < rows.length; i++) {
        //will insert the cell at the end
        let new_cell = rows[i].insertCell(-1); 
    }
}
    //need to update rows as well
    numRows++;
    numCols++;
}

// Remove a row
function removeR() {
    //grab the grid
    let grid = document.getElementById('grid');
    //-1 is the specific index used to delete the last row, accounts for all cells
   grid.deleteRow(-1);
   numRows--;
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}