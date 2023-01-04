console.log('Hola amigo y bienvenido in your firts project in ts!');
const arr = [10, 100, 1000, 10000];
arr.forEach(el => console.log(el));
let provaConv = 5;
let myStr;
myStr = 'ciao';
myStr = 'hola'; //si può riassegnare la variabile con altra stringa
myStr = false; //non si può riassegnare con numeri o booleani
console.log('myStr: ' + myStr);
//dichiarare array di stringhe
let myArr;
//assegnare array di stringhe (solo stringhe altriment errore)
myArr = ['ciao', 'ciaone'];
//modo alternativo per dichiarare (ed assegnare) array
let myArr2 = [1, 2, 3];
console.log(myArr, myArr2);
//OGGETTI
//dichiarazione e assegnazione "stando larghi"
let myObj;
myObj = {
    a: 2,
    b: 'ciao'
};
myObj.a = 5; //N.B. qui come vedi non posso riassegnare l'attributo 'a' perché non avendolo dichiarato in fase di dichiarazione di myObj per typescript è come se l'attributo non esistesse!!
//dichiarazione e assegnazione stando più specifici
let myObj2; //N.B. il punto di domanda dopo c significa che posso anche omettere c in fase di assegnazione di un oggetto! se non metto il punto di domanda devo per forza assegnare un valore a c ad ogni assegnazione 
myObj2 = {
    a: 'ehi',
    b: 5,
};
myObj2.a = 'N.B. sto riassegnando attributo a di myObj2 e posso farlo perché ho definito la proprietà \'a\' in fase di dichiaraszione!!';
//FUNZIONI
//function expression: quando assegno una funzione ad una variabile
let myFunc = () => {
    //codice vario
};
//dichiare funzione con la keyword 'function' 
function myFunc2(param1, param2) {
    return param1 + param2; //qui ho messo il return perché ho dichiarato che la funzione ritorna una stringa 
}
//n.b. posso anche non dichiarare il tipo per i parametri MA è pericoloso....
//ANY & UNKNOWN
//any
let gen; //dichiarando una variabile di tipo any POTRò assegnarrgli qualsiasi tipo di valore!
gen = 'stringa';
gen = 5;
gen = false;
gen = [];
//unknown: valore generico un po' più restrittivo. Introdotto con la versione 3 di typescript
//osserva quella che può essere una differenza tra i due
function myFunc3(param) {
    param.saluta();
}
function myFunc4(param) {
    param.saluta();
}
let myTipe = {
    a: 'ciao',
    b: 2,
};
let myInter = {
    a: 'ciao',
    b: 2,
    c: false,
    e: [2, 4],
    f: () => 'ciao',
    g: { p1: 'ciao', p2: 6 },
    h: 5,
    i: false //anche questo e anche eventuali altri attributi aggiuntivi aka posso aggiungerne quanti ne voglio
};
//quando compilo non troverò interface e type nel file .js come nemmeno troverò i tipi. Questo cosa significa? che typescript aiuta il porgrammatore in fase di scrittura del codice e basta
//enum
//usato per fare una mappatura di valori
var newEnum;
(function (newEnum) {
    newEnum["top"] = "TOP";
    newEnum["bottom"] = "BOTTOM";
    newEnum["left"] = "LEFT";
    newEnum["right"] = "RIGHT";
})(newEnum || (newEnum = {}));
//a cosa servono? per confrontare valore (es.valore inseirto da un utente) con una costante
//es.
let utente = 'TOP';
if (utente === newEnum.top) {
    //fai qualcosa
}
//gli enum vengono converiti in oggetti sul file .js
//fonte: https://www.youtube.com/watch?v=KJ1KGB-XGAY&list=PLYrQFCVhfFIt4k21sOv8Ll29ZxLQTSmR1&index=5
//MODULI
//introdotti con ES6 (ecma script 6)
//N.B. Problematiche nei progetti web ---> moduli ostici
// - conviene convertire file .ts in ES6 (convertendo in ES5 [di default] succedono un po' di casini)
// - il compilatore non aggiunge l'estensione .js (questo va bene per node ma non per javascript (dunque x un progetto web)). Bisogna dunque aggiungerli a mano. La soluzione più semplice è utilizzare la libreria 'webpack' che mette insieme tutto il codice js e dunque il browser non dovrà andare in cerca delle varie variabili, metodi e classi all'interno di diversi file...
//es. di esportazione (ho commentato perché dava qualche piccola rognetta in console)
// export const giorni: number = 365
// export let ore = 24
// export const totaleOre = (): number => {
//     return giorni * ore
// }
// export default class Data {
//     constructor() {
//         console.log('Oggi è il ', new Date())
//     }
// }
//N.B. tutto ciò che esporto potrà essere visualizzato solo in LETTUR e sarà dunque trattato come una costante. Non posso modificare tali variabili
//esporto tutto questo in un altro file
//fonte:  https://www.youtube.com/watch?v=2QKCw7vz40g&list=PLYrQFCVhfFIt4k21sOv8Ll29ZxLQTSmR1&index=6
//CLASSI
//introdotte con ES6. Non sono come le classi di Java...
//private --> posso usare un attributo o una funzione private solo all'interno di quella classe
//protected --> posso usare un attributo o una funzione protected solo all'interno di quella classe O all'interno di classi che estendeno quella classe
//readonly --> posso solo eseguire operaz. di LETTURA ad attributi/funzioni che hanno la dicitura 'readonly' davanti
//es
class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name); //qui dentro la classe posso leggere tranquillamente l'attributo (è protected)
        console.log(this.age); //qui dentro la classe posso leggere tranquillamente l'attributo (è priovate)
    }
    saluta() {
        console.log('ciao ciao' + this.name);
    }
}
let mas = new Persona('Nicola', 29);
console.log(mas);
mas.age; //attributo privato, non posso leggerlo
mas.saluta(); //posso leggerlo perché non è privato
class Genitore extends Persona {
    constructor(name, age) {
        super(name, age); //modo per richiamare attributi della classe Persona
    }
    //override di un metodo
    saluta() {
        console.log('hola, sono ' + this.name + ' e faccio override così'); //riesco a leggere l'attributo solo perché è protected (si possono leggere dentro la classe e dentro a classi che estendono quella classe). Se fosse private NON potrei!
    }
}
let mamma = new Genitore('Monica', 56);
mamma.saluta();
//fonte: https://www.youtube.com/watch?v=2EFfahcNEMc&list=PLYrQFCVhfFIt4k21sOv8Ll29ZxLQTSmR1&index=7
