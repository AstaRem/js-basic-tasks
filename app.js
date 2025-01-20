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
console.log("Uzduotis 2 ----------");
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
    let result = ` Norint gauti ${n} sumą litais, mums reikės ${qty_5} monetų po 5 lt, ${qty_2} monetų po 2 litus ir ${qty_1} monetų po 1 litą. Viso monetų skaičius: ${total_coins}.
    
    
    number: ${n};
                    coin 5: ${qty_5};
                    coin 2: ${qty_2};
                    coin 1: ${qty_1}
                    total coins: ${total_coins}`
    console.log(result)
}

coins(15);

// uzduotis 6 -----------------------
console.log("Uzduotis 6 ----------");
// Parašykite f-ją, kuri patikrintų ar galima sudaryti trikampį iš 3 duotų kraštinių ilgių (a,b,c).
// Atsakymo pvz: „kraštinės 4, 5, 3 sudaro trikampį“
// „kraštinės 2, 3, 10 nesudaro trikampį“
// Kad būtų galima sudaryti trikampį iš trijų kraštinių ilgių a, b ir c, turi galioti šios trys nelygybės:
// a + b > c;
// a + c > b;
// b + c > a
// Jei nors viena iš šių sąlygų yra neteisinga, trikampio sudaryti negalima.


function triangle(a,b,c){
    let outcome = '';
    let sum_1 = a + b;
    let sum_2 = a + c;
    let sum_3 = b + c;

    if (sum_1 > c &&  sum_2 > b && sum_3 > a){
        outcome = `yes`
    } else {
        outcome = `no`
    }
    return outcome
}
console.log(triangle(10,10,10));


// uzduotis 7 -----------------------
console.log("Uzduotis 7 ----------");
// Kavos puodelių skaičiuotuvas. 6 nusiperki, 7 nemokamas. Sukurti f-ją, kuri apskaičiuotų kiek kavos puodelių iš viso pirkėjas gaus.
// Pavyzdys ką turėtų išvesti funkcija, iškvietus su pavyzdiniais parametrais:
// totalCups(6) ➞ 7
// totalCups(12) ➞ 14
// totalCups(213) ➞ 248


 let paid_cup_qty = 6;
 let qty_with_bonus = paid_cup_qty + 1;
 let extra_cups_each_set = 1;

function coffee_cups(cup_qty){
    let remainder =  cup_qty % paid_cup_qty;
    let cup_set = Math.floor(cup_qty / paid_cup_qty);
    let extra_cups = 0;
    if (cup_qty  >= 6 ) {
        extra_cups  = cup_set * extra_cups_each_set;
    } else {
        extra_cups = 0;
    }
    let total = remainder + (cup_set * paid_cup_qty) + extra_cups;
    return total
}

console.log(coffee_cups(6));
console.log(coffee_cups(12));
console.log(coffee_cups(213));


// uzduotis 8 -----------------------
console.log("Uzduotis  ----------");

// Parašykite funkciją, kuri apskaičiuos nuolaidos dydį priklausomai nuo to, kiek pinigų pirkėjas išleido.
// Skaičiavimai atlikti pagal šias taisykles:
// Iki 50 € – nuolaida nėra taikoma (0%).
// Nuo 50 € iki 100 € – taikoma 10% nuolaida.
// Nuo 100 € iki 200 € – taikoma 15% nuolaida.
// Daugiau nei 200 € – taikoma 20% nuolaida.
// Išvedimo pvz: Pirkėjas pirko prekių už X sumą, kam buvo pritaikyta nuolaida Y, Pirkėjas sumokėjo Z sumą pinigų.

let nuolaida_0 = 0;
let nuolaida_1 = 0.10;
let nuolaida_2 = 0.15;
let nuolaida_3 = 0.20;
let nuolaidos_verte = 0;
let galutine_kaina = 0;

function skaiciuok_galutine_kaina(pirkinio_kaina){
    if (pirkinio_kaina > 200){
        nuolaidos_verte = Math.floor(pirkinio_kaina * nuolaida_3);

    } else if(pirkinio_kaina > 100 && pirkinio_kaina <= 200){
        nuolaidos_verte = Math.floor(pirkinio_kaina * nuolaida_2);

    } else if(pirkinio_kaina > 50 && pirkinio_kaina <= 100) {
        nuolaidos_verte = Math.floor(pirkinio_kaina * nuolaida_1);

    } else {
        nuolaidos_verte = Math.floor(pirkinio_kaina * nuolaida_0);

    }
    galutine_kaina = pirkinio_kaina - nuolaidos_verte
    return `Pirkėjas pirko prekių už ${pirkinio_kaina} EUR sumą, kuriai buvo pritaikyta nuolaida: ${nuolaidos_verte} EUR. Pirkėjas sumokėjo ${galutine_kaina} EUR.` 
}

console.log(skaiciuok_galutine_kaina(10));
console.log(skaiciuok_galutine_kaina(49));
console.log(skaiciuok_galutine_kaina(50));
console.log(skaiciuok_galutine_kaina(100));
console.log(skaiciuok_galutine_kaina(101));
console.log(skaiciuok_galutine_kaina(201));
console.log(skaiciuok_galutine_kaina(201));


// uzduotis 9 -----------------------
console.log("Uzduotis 9 ----------");
// Sukurkite funkciją, kuri patikrins, ar skaičius yra tam tikrame intervale. Funkcija turėtų priimti tris parametrus: skaičių ir du intervalus (minimalų ir maksimalų), grąžinti true, jei skaičius yra intervale, ir false, jei ne.

let in_range;
function check_in_range(num, min_num, max_num){
    if (num >= min_num && num <= max_num){
        in_range = true;
    } else{
        in_range = false;
    }
    return in_range
}

console.log(check_in_range(3, 10, 20));
console.log(check_in_range(15, 10, 20));

// Uždavinio papildymas padarius pirmą variantą papildykite sprendimą darydami prielaida, kad nežinote kuris iš parametrų yra intervalo minimumas, kuris maksimumas?

let in_range_2;
function check_in_range_2(num, num_1, num_2){
    let min_num;
    let max_num;
    //find which one is min, which one is max
    if (num_1 < num_2){
        min_num = num_1;
        max_num = num_2;
    } else if (num_1 > num_2){
        min_num = num_2;
        max_num = num_1;
    } else {
        //numbers are equal
        min_num = num_1;
        max_num = num_2;
    }

    if (num >= min_num && num <= max_num){
        in_range = true;
    } else{
        in_range = false;
    }
    return in_range
}

console.log(check_in_range_2(3, 10, 20));
console.log(check_in_range_2(15, 100, 20));
console.log(check_in_range_2(15, 100, 2));
