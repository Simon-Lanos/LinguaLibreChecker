function CreateTableFromJSON() {

    // EXTRACT VALUE FOR HTML HEADER. 
    const col = [];
    col.push('action')
    for (let i = 0; i < data.length; i++) {
        for (const key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    const table = document.createElement('table');
    table.setAttribute('class', 'table table-bordered')

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    let tr = table.insertRow(-1);                   // TABLE ROW.
    for (let i = 0; i < col.length; i++) {
        const th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = translate(col[i]);
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (let i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            const tabCell = tr.insertCell(-1);
            if (col[j] === 'action') {
                tabCell.innerHTML = '<button class="btn btn-primary" id="btnOpen" onclick="btnOpen(' + i + ')">Play</button>';
            } else if (col[j] === 'duration') {
                tabCell.innerHTML = data[i][col[j]] + 's.';
            } else if (col[j] === 'size') {
                tabCell.innerHTML = data[i][col[j]] + 'Kio';
            } else {
                tabCell.innerHTML = data[i][col[j]];
            }
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    const divContainer = document.getElementById('showData');
    divContainer.innerHTML = '';
    divContainer.appendChild(table);
}

CreateTableFromJSON();
