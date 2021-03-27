const btn = document.querySelector("#btn");
const msgBox =document.querySelector("#msgBox");
const displayMsg = document.querySelector("#displayMsg");

btn.addEventListener('click', sendMsg)

function sendMsg() {
    let message = msgBox.value;
    

    if(message ===''){
        alert('Please Insert Message')
    }else {
        displayMsg.innerHTML = message;
        msgBox.value = '';
    }
}