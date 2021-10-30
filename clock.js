const clock = document.querySelector("#clock span");
// 1. get time from date function
// 2. use setInterval
// 3. show the time

function clockTime() {
    const time = [new Date().getHours().toString(), new Date().getMinutes().toString(), new Date().getSeconds().toString()];
    clock.innerText = `${verifyTime(time[0])} : ${verifyTime(time[1])} : ${verifyTime(time[2])}`;
    if(time[0] == 0 && time[1] == 0 && time[2] == 0) {
        localStorage.removeItem(todoKey);
    }
}
function verifyTime(Num) {
    if(Num.length === 1) {
        return '0' + Num;
    } else {
        return Num;
    }
}

setInterval(clockTime, 1000);