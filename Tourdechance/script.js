function shuffle(array){
var currentIndex = array.length,
randomIndex;

while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
array[currentIndex], 
array[currentIndex],

    ];
}
return array;
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";


    let AC = shuffle([1890,2250,2610]);
    let Camera = shuffle([1850, 2210,2570]);
    let Zonk = shuffle([1770,2130,2490]);
    let PS = shuffle([1810,2170,2530]);
    let Headset = shuffle([1750,2110,2470]);
    let Drone = shuffle([1630,1990,2350]);
    let ROG = shuffle([1570, 1930, 2290]);


    let results = shuffle([
AC[0],
Camera[0],
Zonk[0],
PS[0],
Headset[0],
Drone[0],
ROG[0],
    ]);

if(AC.includes(results[0])) SelectedItem = "15%  ";
if(Camera.includes(results[0])) SelectedItem = "10% ";
if(Zonk.includes(results[0])) SelectedItem = "10% ";
if(PS.includes(results[0])) SelectedItem = "Vide";
if(Headset.includes(results[0])) SelectedItem = "-15% ";
if(Drone.includes(results[0])) SelectedItem = "3% ";
if(ROG.includes(results[0])) SelectedItem = " 5%";

box.style.setProperty("transition","all ease 5s");
box.style.transform = "rotate("  + results[0] + "deg)";
element.classList.remove("animate");

setTimeout(function(){
element.classList.add("animate");

},  5000);



setTimeout(function(){
    applause.play();
    Swal.fire({
        title: '!!Félicitation!!',
        html: ' Votre prix est de' + SelectedItem + ' | ' + '<a href="#" style = "text-decoration:none;color:blue">Réclamer maintenant</a>',
        imageUrl: 'https://www.scotwork.fr/media/2cffrmqj/gagner-a-tout-prix.jpg',
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: 'Custom image',
      })
}, 5500)

setTimeout(function(){
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
}, 6000);






}






