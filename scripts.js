console.log("Nu er vi igang");



document.querySelector("#sendkode").addEventListener("click", showSendt);


function showSendt() {

    console.log("Nu kommer der infoboks frem");

    document.querySelector("#infoboks").classList.remove("hide");
}
