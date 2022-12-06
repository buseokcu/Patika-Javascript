let name = prompt("Adiniz:");
let text = document.querySelector("#myName");
text.innerHTML = `${name}`;

//Uhr
function uhr() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const times = new Date();
    let day = days[times.getDay()];

    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + day
    document.getElementById('myClock').innerHTML = time;
}
setInterval(uhr, 1000); // her 1 saniyede bir yenileme yapılıyor.


