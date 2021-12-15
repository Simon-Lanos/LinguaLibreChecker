function CreateTableFromJSON() {
    var myData = data;

    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    col.push("audio")
    for (var i = 0; i < myData.length; i++) {
        for (var key in myData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.setAttribute('class','table table-bordered')

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);                   // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myData.length; i++) {
        tr = table.insertRow(-1);
        
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            if (col[j] == "audio") {
                tabCell.innerHTML = '<button class="btn btn-primary" id="btnOpen" onclick="btnOpen()">Play</button>';
            }
            else if (col[j] == "duration") {
                tabCell.innerHTML = myData[i][col[j]] + 's.';
            }
            else if (col[j] == "size") {
                tabCell.innerHTML = myData[i][col[j]] + 'KO';
            }
            else{
                tabCell.innerHTML = myData[i][col[j]];
            }
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
CreateTableFromJSON();