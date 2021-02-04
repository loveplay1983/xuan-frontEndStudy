function delLast() {
    var inputStr = document.getElementById("input-field").value;
    // alert(inputStr);
    document.getElementById("input-field").value=inputStr.substring(0, inputStr.length-1);
}