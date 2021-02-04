var rows = prompt("Rows for your multiplication table???");
var cols = prompt("Cols for your multiplication table???");

if (rows == "" || rows == null) {
    rows = 10;
}
if (cols == "" || cols == null) {
    cols = 10;
}

genTable(rows, cols);

function genTable(rows, cols) {

    var j = 1;

    var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";

    for (i = 1; i <= rows; i++) {
        // add table row
        output = output + "<tr>";
        // while j still in the range of cols
        while (j <= cols) {
            // keep adding cols with i*j where i is fixed and j++
            output = output + "<td>" + i * j + "</td>";
            j = j + 1;
        }
        // add the row closure tag and reset the cols counter
        output = output + "</tr>";
        j = 1;
    }


    output = output + "</table>";

    document.write(output);
}

