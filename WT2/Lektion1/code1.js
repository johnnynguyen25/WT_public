const a = [1, 2, 3, 4];
let zwischensumme = 0;
for(let i=0; i<a.length; i++) {
    zwischensumme += a[i];

}

function print(wert) {
    console.log(wert);

}
a.forEach(print);

// anders geschrieben folgt hier:
const print=(wert) => {
    console.log(wert);    
}       
a.forEach(print);

// oder noch kürzer:
a.forEach((wert) => {
    console.log(wert);
});


// noch anders
zwischensumme = 0;
a.forEach((wert) => {
    zwischensumme+=wert;

});
console.log(zwischensumme);

//Filter was neues
const b = [1, 2, 3, 4];
let a2 = a.filter((wert) => {
    if(wert%2==0) return true;
    else return false;
});
console.log(a2);

// find was neues 
const a3 = a.find((wert) => {
    if(wert%2==0) return true;
    else return false;
});
console.log(a3);

// map was neues
const a4 = a.map((wert) => {
    return wert*2;
});
console.log(a4);

// reduce was neues
const a5 = a.reduce((wert) => {
    return wert*2;
});
console.log(a5);

const autos=["bmw", "mercedes", "fiat"];

let autogross = autos.map((auto) => {
    return auto.toUpperCase();
});
console.log(autogross);
