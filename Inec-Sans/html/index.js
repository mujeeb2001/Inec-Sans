const sidebar = document.querySelector(".now");
const bar = document.querySelector("#bar")
const canc = document.querySelector("#cancel")

bar.addEventListener("click", rightNow);

function rightNow () {
    sidebar.classList.add("hide")
}

canc.addEventListener("click", hideNav)

function hideNav () {
    sidebar.classList.remove("hide")
}