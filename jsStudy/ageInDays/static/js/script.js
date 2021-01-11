// Calculate the age in days

function yearInDays() {
    var fullDate = new Date();
    var currentYear = fullDate.getFullYear();

    var birthYear = prompt("When were you born?");
    var ageInDays = (currentYear - birthYear) * 365;

    if (ageInDays > 0) {
        document.getElementById("ageInDays").innerHTML = ageInDays + " days";
    }
    else {
        alert("Have you really lived that long, Oh my God !!!");
    }
}

// function resetYearDays() {
//     if (document.getElementById("ageInDays").innerHTML != null) {
//         document.getElementById("ageInDays").innerHTML = 0;
//     }
// }

function resetYearDays() {
    if (document.getElementById("ageInDays").innerHTML != null) {
        document.getElementById("ageInDays").remove();
    }
}