let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();
let weekDay = today.getDay();

document.querySelector("#content").innerHTML = `<p>Aujourd'hui nous sommes le
${days[weekDay]} ${day} ${months[month]} ${year}
</p>`;

console.log(weekDay);

