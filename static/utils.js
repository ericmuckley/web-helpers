
/*
Swap part of a string to another.
This is useful for changing the value or
icon of a button or other toggling wiget.
Inputs:
    s: string (original string we want to modify)
    swaps: array of 2 strings we want to swap.
Example:
button.innerHTML = swapStrings(button.innerHTML, ['open', 'close'])
*/
function swapStrings(s, swaps) {
    if (s.includes(swaps[0])){
        return s.replace(swaps[0], swaps[1]);
    } else {
        return s.replace(swaps[1], swaps[0]);
    };
};


// Remove all child elements form a parent element.
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

// Add an element to the front of an array if it exists in the array
function addToFront(arr, el){
    if (arr.includes(el)){
        arr = arr.filter(item => item !== el);
        arr.unshift(el);
    };
    return arr;
};


// format a label for display by capitalizing the
// first letter and replacing underscores with spaces
function formatLabel(label, capitalize=true){
    if (label === ''){
        return '';
    } else {
        if (capitalize){
            label = label.charAt(0).toUpperCase() + label.slice(1);
        };
    return label.replace('_', ' ').replace('-', ' ');
    };
};


// Create a bootstrap row with multiple columns.
// Returns an array containing each column.
function createRowCols(parentdiv, ncols=2) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i=0; i<ncols; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);
    };
    parentdiv.appendChild(row);
    return row
};






// Create a table with headers and body.
// Example: const [table, thead, tbody] = createTable();
function createTable(headers=[], classes=['table', 'table-sm', 'table-borderless']){
    const table = document.createElement("table");
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerrow = thead.insertRow();
    table.appendChild(thead);
    table.appendChild(tbody);
    for (var c of classes){
        table.classList.add(c);
    };
    for (var h of headers) {
        var th = document.createElement('th');
        th.style.textAlign = 'center';
        th.classList.add('text-nowrap');
        th.innerHTML = h;
        headerrow.appendChild(th);
    };
    return [table, thead, tbody];
};




/*
Remove a row from a table when
a button in the row of the table is clicked.
The button should be inside a td table cell.
Use btn.onclick = removeRow; to connect
this function to the button. 
*/
function removeRow(){
    // get cell of delete button
    const td = event.target.parentNode; 
    // get row of delete button
    const tr = td.parentNode; 
    // delete row
    tr.parentNode.removeChild(tr);
};


