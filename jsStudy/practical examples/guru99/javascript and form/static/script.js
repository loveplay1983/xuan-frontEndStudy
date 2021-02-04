// store all the id for all the error tip divs    
var divs = new Array();
divs[0] = "errFirst";
divs[1] = "errLast";
divs[2] = "errEmail";
divs[3] = "errUid";
divs[4] = "errPassword";
divs[5] = "errConfirm";


function validate() {

    // store all the id for all the inputs 
    var inputs = new Array();
    inputs[0] = document.getElementById("first").value;
    inputs[1] = document.getElementById("last").value;
    inputs[2] = document.getElementById("email").value;
    inputs[3] = document.getElementById("uid").value;
    inputs[4] = document.getElementById("password").value;
    inputs[5] = document.getElementById("confirm").value;

    // store all the error outputs 
    var errors = new Array();
    errors[0] = "<span style='color:red'>please enter your first name!</span>";
    errors[1] = "<span style='color:red'>please enter your last name!</span>";
    errors[2] = "<span style='color:red'>please enter your email!</span>";
    errors[3] = "<span style='color:red'>please enter your user id!</span>";
    errors[4] = "<span style='color:red'>please enter your password!</span>";
    errors[5] = "<span style='color:red'>please confirm your password!</span>";

    for (i in inputs) {
        var errMsg = errors[i];
        var div = divs[i];

        if (inputs[i] == "") {
            // document.getElementById(div).innerHTML = errMsg;
            document.getElementById(div).innerHTML = errMsg;

        } else if (i == 2) {
            var atPos = inputs[i].indexOf("@");
            var dotPos = inputs[i].indexOf(".");
            // if @ is the first char or use . right after @ or the top-level-domain name is invlaid
            if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= inputs[i].length) {
                document.getElementById(div).innerHTML = "<span style='color: red'>Enter a valid email address</span>";
            } else {
                document.getElementById(div).innerHTML = "OK!!!";
            }
        } else if (i == 5) {
            var pass = document.getElementById("password").value;
            var passConfirm = document.getElementById("confirm").value;
            // if (pass == "") {
            //     document.getElementById("errPassword").innerHTML = "<span style='color:red'>please enter your password!</span>";
            // }
            // if(passConfirm == "")
            // {
            //     document.getElementById("errConfirm").innerHTML = "<span style='color:red'>please confirm your password!</span>";
            // }
            if (passConfirm != pass) {
                document.getElementById(div).innerHTML = "<span style='color: red'>Your passwd doesn't match</span>";

            } else {
                document.getElementById(div).innerHTML = "OK!!!";
            }
        } else {
            document.getElementById(div).innerHTML = "OK!!!";
        }
    }
}


function finalValidate() {
    var count = 0;
    inputs = document.querySelectorAll(".isvalid");
    alert("There are < " + inputs.length + " > blank fields, please check your inputs!1!");
    for (i = 0; i < inputs.length; i++) {
        var div = divs[i];
        if (document.getElementById(div).innerHTML == "OK!!!") {
            count += 1;
        }
    }
    if (count == inputs.length) {
        document.getElementById("errFinal").innerHTML = "Inputs are correct. You are good to go!!!";
    }
}

