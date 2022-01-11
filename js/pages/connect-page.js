import { getCookie, checkCookie } from "../../js/functions/Util/cookies.js";

export function openBoardPage(){
    window.location.href ="board-page.php";
}

function setSessionUsername(){
    var username = document.getElementById("username").value;

    document.cookie = `username=${username}; sameSite=Lax`;

    openBoardPage()
}

export function connectDiv() {
    if(checkCookie("username")){
        document.getElementById("username-text").innerHTML = `Your username is: ${getCookie("username")}`
        document.getElementById("submit-button").value = "Change username"
    }else{
        document.getElementById("username-text").innerHTML = `You don't have a username`
        document.getElementById("submit-button").value = "Set username"
    }



    document.getElementById("submit-button").addEventListener('click', () => {setSessionUsername()})
    document.getElementById("anonymous-button").addEventListener('click', () => {openBoardPage()})
}
