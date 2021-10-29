function smajlik() {
    document.getElementById("signature").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("smile").style.display = "block";
}

function signature() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("smile").style.display = "none";
    document.getElementById("signature").style.display = "block";
}
function menu() {
    document.getElementById("signature").style.display = "none";
    document.getElementById("smile").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

var i = 0;
var n = document.getElementById("seconds").value; //čas jak dlouho to poběží
function countdown() {
    setInterval(function () {
        if (i == n) {
            clearInterval(n)
            return
        }
        i++;
        document.getElementById("count").innerHTML = i;
    }, 1000);
}
class Odpocet {
    constructor(time){
        this.time = time;
    }
    start(){
        console.log(this.time);
    }
}
let hodiny = new Odpocet(5);
hodiny.start();