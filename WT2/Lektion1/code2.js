// let ist die Definition einer Variable
console.log("test");

let a = 5;
let b = "Hallo";
console.log(a+b);

let c = a + b;
console.log(c);
console.log(typeof c);

// const definiert einen fixen Wert
const d = a + b;
console.log(d);


// Wie definiert man eine Funktion
function add(a,b) {
    return a+b;

}

const sub = (a,b)=> a-b;
const sub2 = (a,b) => { return a-b; }

let add2 = add;
console.log(add2);
console.log(typeof add2);
console.log(add2(2,3));

constar=Array();
Array[1]=5;
Array[2]="Test";
Array[3]=add(1,2,3);
Array[4]=add;



// Array mit Rest-Parameter
function add(p1, p2, ...a) {
    console.log(a);
}
add(1);
add(1,2);
add(1,2,3);


// Array mit Rest-Parameter
function add(p1, p2, ...a) {
    let idx=0;
    let zwischensumme = 0;
    while(idx<a.length) {
        zwischensumme += a[idx];
        idx++;
    }
    return zwischensumme;
}
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
