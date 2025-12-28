let list1 = [2, 4, 6, 22, -2, -77, -10, -848]
let list2 = []
let list3 = [-2, -4, -6, -22, -2, -77, -10, -848]
let list4 = [-11111, 24325143, -3245, -246236, 678563, 738465, -82397]
let list5 = [23, 69, -6, 22, 1, -77, 10, -848, 901, 3772, 7, 24, 0]

const random = Math.floor(Math.random() * 5) + 1;
let PickedList;

if (random == 1)
{
    PickedList = list1;
}
else if (random == 2)
{
    PickedList = list2;
}
else if (random == 3)
{
PickedList = list3;
}
else if (random == 4)
{
PickedList = list4;
}
else if (random == 5)
{
PickedList = list5;
}

console.log("PickedList: " + PickedList);
let curTotal = 0;

function addPositives()
{
    for (let i = 0; i < PickedList.length; i++)
    {
        let curNum = PickedList[i];

        if (curNum > 0)
        {
            curTotal = curTotal + curNum
        }
    }
    console.log(curTotal)
    return curTotal;
}

console.log("Výsledek prvního úkolu: " + addPositives())

function odstranitDuplicityJednoduse(arr) {
    let vysledek = [];
    for (let polozka of arr) {
        if (!vysledek.includes(polozka)) {
            vysledek.push(polozka);
        }
    }
    return vysledek;
}

function odstranitDuplicitySet(arr) {
    return [...new Set(arr)]
}

function generujData(velikost) {
    let data = [];
    for (let i = 0; i < velikost; i++) {
        data.push("polozka" + (i % 100));
    }
    return data;
}

const malyVstup = generujData(1000);
const velkyVstup = generujData(50000)

console.log("Kontrola správnosti (očekáváno 100 unikátních položek):");
console.log("Jednoduchá varianta:", odstranitDuplicityJednoduse(malyVstup).length);
console.log("Varianta se Setem:", odstranitDuplicitySet(malyVstup).length);
console.log("-----------------------------------");

console.time("Jednoduchá varianta – 1 000 prvků");
odstranitDuplicityJednoduse(malyVstup);
console.timeEnd("Jednoduchá varianta – 1 000 prvků");

console.time("Set varianta – 1 000 prvků");
odstranitDuplicitySet(malyVstup);
console.timeEnd("Set varianta – 1 000 prvků");

console.time("Jednoduchá varianta – 50 000 prvků");
odstranitDuplicityJednoduse(velkyVstup);
console.timeEnd("Jednoduchá varianta – 50 000 prvků");

console.time("Set varianta – 50 000 prvků");
odstranitDuplicitySet(velkyVstup);
console.timeEnd("Set varianta – 50 000 prvků");