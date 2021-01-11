// Generate gifs


function genFun() {
    var img = document.createElement("img");
    var div = document.getElementById("flex-fun-gen");
    var randNum = Math.floor(Math.random() * 6);     // generate rarndom number between 0 to 6
    img.src = "static/gif/peppa_" + randNum + ".gif";
    div.appendChild(img);
}

function resetFun() {
    document.getElementById("flex-fun-gen").remove();
    var newImgContainer = document.createElement("div");
    newImgContainer.id = "flex-fun-gen";
    newImgContainer.className = "flex-box-container";
    document.getElementById("container-id").appendChild(newImgContainer);
}

