const sideBars = document.querySelector(".now")
const bars = document.querySelector("#dot")

bars.addEventListener("click", bringNav)
function bringNav () {
   sideBars.classList.add("hide")
}
console.log(bringNav)

const sideBar = document.querySelector(".nown");
const bar = document.querySelector("#bar")
const canc = document.querySelector("#cancel")

bar.addEventListener("click", rightNow);

function rightNow () {
    sideBar.classList.add("hider")
}

canc.addEventListener("click", hideNav)

function hideNav () {
    sideBar.classList.remove("hider")
}
