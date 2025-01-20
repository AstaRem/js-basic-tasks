// uzduotis 1 ------------------------
// Sukurk f-ją, kuri gautu du parametrus (a, b). F-ja gražina 10 jei vienas iš skaičiu = 10 arba tų skaičių suma = 10
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true
console.log("Uzduotis 1 ----------");

let result = 10;

function makesTen(a, b){
    if (a+b === result || a === result || b=== result){
        return result
    } else {
        return `Try again, result is not ${result}`
    }
}

console.log(makesTen(1, 10));
console.log(makesTen(10, 2));
console.log(makesTen(2, 0));
console.log(makesTen(0, 0));
console.log(makesTen(10000, 2000));

// uzduotis 2 -----------------------
// console.log("Uzduotis 2 ----------");
// Sukurk f-ją, kuri patikrintu ar asmuo turi leidimą ir ar asmuo yra vyresnis nei 18 metų abi sąlygos būtinos, kad f-ja gražintų true, priešingu atveju gražina false
// acceptPerson(14, true) ➞ false
// acceptPerson(21, false) ➞ false
// acceptPerson(18, true) ➞ true

let hasPermit = true;
let noPermit = false;

function acceptedPerson(permit, age){
    if(permit == true && age >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(`Can person be accepted: ${acceptedPerson(hasPermit, 5)}`)
console.log(`Can person be accepted: ${acceptedPerson(noPermit, 5)}`)
console.log(`Can person be accepted: ${acceptedPerson(hasPermit, 25)}`)
console.log(`Can person be accepted: ${acceptedPerson(noPermit, 25)}`)
console.log(`Can person be accepted: ${acceptedPerson(hasPermit, 18)}`)
console.log(`Can person be accepted: ${acceptedPerson(noPermit, 18)}`)

// uzduotis 3 -----------------------
console.log("Uzduotis 3 ----------");
// Parašykite programą kuri patikrintų ar skaičius dalinasi iš 3, 5 ar iš abiejų tai yra ir iš 3 ir iš 5.
// Jei dalinasi iš 3 be liekanos atspausdinam „Labas“,
// jei dalinasi iš 5 be liekanos atspausdinam „Rytas“,
// jei dalinasi ir iš 3 ir iš 5 atspausdinam „Labas rytas“
// jei nesidalina nei iš 3 nei iš 5 išvedam paprasčiausiai skaičių.
// Išvedamo atsakymo pvz. 3 => „Labas“
// Arba 5 => „Rytas“
// Arba 15 => „Labas Rytas“
// Arba 7 => 7

let first_divider = 3; 
let second_divider = 5;

function division(number){
    if(number % first_divider == 0 && number % second_divider == 0 ){
        return "Labas rytas"
    } else if(number  % first_divider == 0 ){
        return "Labas"
    } else if(number % second_divider == 0){
        return "Rytas"
    } else {
        return number
    }
}

console.log(division(6));
console.log(division(20));
console.log(division(15));
console.log(division(34));


// uzduotis 4 -----------------------
console.log("Uzduotis 4 ----------");

let plotis = 5;
let ilgis = 5;
let pakuotes_dydis_m2 = 1.5;
let proc_atsarga = 0.05; //pasitikrinti 
let kaina_1_m2 = 23;
let valiuta = "EUR"; 

function plyteles(){
    let plotas = plotis * ilgis;
    let atsarga_m2 = plotas * proc_atsarga;
    let viso_plyteliu = plotas + atsarga_m2;
    let pilnu_pakuociu = Math.ceil(viso_plyteliu / pakuotes_dydis_m2);
    let viso_kaina = pilnu_pakuociu * kaina_1_m2;
    let atsakymas = `Kambario dydis ${plotis}m ir ${ilgis}m, reikės ${pilnu_pakuociu} pakuočių plytelių. Reikalinga pinigų suma ${viso_kaina}${valiuta}.`

    return atsakymas;
}

let ats = plyteles();

console.log(ats);


// uzduotis 5 -----------------------
console.log("Uzduotis 5 ----------");

// Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų.
// Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“.

let coin_1 = 1;
let coin_2 = 2;
let coin_5 = 5;

function coins(n){
    let remainder_2 = 0;
    let remainder_1 = 0;
    let qty_2 = 0;
    let qty_1 = 0;
 let remainder_5 = n % coin_5;
 let qty_5 = Math.floor(n / coin_5);
    console.log("remainder after 5",remainder_5);
    if (remainder_5 != 0){
        remainder_2 = remainder_5 % coin_2;
        qty_2 = Math.floor(remainder_5 / coin_2);
        console.log("remainder after 2",remainder_2);
        if(remainder_2 != 0) {
            remainder_1 = remainder_2;
            qty_1 = Math.floor(remainder_2 / coin_1);
            console.log("remainder after 1",remainder_2);
        } else {

            remainder_1 
            console.log("remainder after 1",remainder_2);

        }
    } 
    let total_coins = qty_5 + qty_2 + qty_1;
    let result = ` Norint gauti ${n} sumą litais, mums reikės ${qty_5} monetų po 5 lt, ${qty_2} monetų po 2 litus ir ${qty_1} monetų po 1 litą. Viso monetų ${total_coins} skaičius.
    
    
    number: ${n};
                    coin 5: ${qty_5};
                    coin 2: ${qty_2};
                    coin 1: ${qty_1}
                    total coins: ${total_coins}`
    console.log(result)
}

coins(8);