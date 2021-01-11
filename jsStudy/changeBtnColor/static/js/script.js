// change button color

var allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

var copyAllButtons = [];    // copy previous buttons
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);    // get the button class (bootstrap name)
}

function btnColorChange(options) {
    if (options.value === "random") {
        buttonsRandom();
    } else if (options.value === "red") {
        buttonsRed();
    } else if (options.value === "green") {
        buttonsGreen();
    } else if (options.value === "blue") {
        buttonsBlue();
    } else if (options.value === "yellow") {
        buttonsYellow();
    } else {
        buttonsReset();
    }
}

function buttonsRandom() {
    let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

    for (let i = 0; i < allButtons.length; i++) {
        // let randNum = Math.floor(Math.random() * allButtons.length);
        let randNum = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randNum]);
    }
}

function buttonsRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-info");
    }
}

function buttonsBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-primary");
    }
}

function buttonsYellow() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-warning");
    }
}

function buttonsReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);

    }

}
