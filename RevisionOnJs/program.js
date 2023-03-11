var ages = [14,16,19,21,23];

console.log(ages.every(CheckAge));   // all age value must be grater than 18, The some() will return true.

console.log(ages.some(CheckAge));   // If only one item is greater than 18, The some() will return true.

console.log(ages.filter(CheckAge)); // It will return all items greater than 18 in array.   


function CheckAge(age) {
    return age > 18;
}


ages.forEach(function(item, index, array) {
    console.log(array, index, array); 
});

// ------------------------v

var numbers = [23,35,24,20];

var data = numbers.map(function(num){  // map() will multiply each number by 10.
    return num * 10;
});
console.log(data);


var reduce = numbers.reduce(function(prev, current,index, array){  // add all numbers together.
    return prev + current;
});
console.log(reduce);


// ----------------- Regular Expressions(RegEx) -----------------

var email = "example@gmail.com";
var re = /@gmail.com/;
console.log(re.test(email));    // check if email contain '@gmail.com' or not. 


var reg = /^\d{3}$/; // ^ --> means Start, $ --> means End, \d --> Digigt, num must be contain 3 nums only from start to end.
console.log(reg.test("1253"));
console.log(reg.test("12ah4"));
console.log(reg.test("526fdfe"));


var regex = /^\d/;
console.log(regex.test("4ahm3ed7454")); // search for nubmer at the begining of the string.

var regex = /\d$/;
console.log(regex.test("4ahm3ed7454")); // search for nubmer at the End of the string.

var regex = /\d/;
console.log(regex.test("4ahm3ed7454")); // search for any nubmer in the whole string.


// Fuction (Send Func To Func)

function callFunc(myfunction, data) {
    return myfunction(data);
}

function sendData(num) {
    return num * 10;
}

var result = callFunc(sendData,10);
console.log(result);


// This

let person = {
    firstName:"Ahmed",
    secondName: "Elmesalamy",
    id: 770,
    fullName: function() {
        return this.firstName + ' ' + this.secondName;
    }
}

console.log(person.fullName());


let persons = {
    fullData: function(city, country) {
        return this.firstName + ' ' + this.secondName;
    }
}

let person1 = {
    firstName: "Ahmed",
    secondName: "Elmesalamy",
}

persons.fullData.apply(person1); // You can send array to apply();
console.log(person1.firstName);

persons.fullData.call(person1); // You cannot send array to apply();
console.log(person1.firstName);

var fulldata =  persons.fullData.bind(person1);  // Share or Copy the fullData() to person1.
console.log(fulldata());


// ----------------- String -----------------
let str = "Javascript, Devoloper";

console.log(str.substring(-1 , 3));  // substring() consider any num less than 0 consider it 0 (Cannot take nagative num).
var result = str.slice(-1);    // slice() can take negative number.
console.log(result);


let newStr = str.replace("JAVASCRIPT" , "Python"); // Error due to diff. in LowerCase and UpperCase.
console.log(newStr);

// To solve this error use (RegEx)
newStr = str.replace(/JAVASCRIPT/i , "Python");
console.log(newStr);

str.toLocaleUpperCase();   // Change the string to upper case.
console.log(str);

// ------- Concat Function -------
let txt1 = "Ahmed";
let txt2 = "Elmesalamy";
let txt3 = txt1.concat("_" , txt2);
console.log(txt3);


// ------- Trim Function -------
let txt = "    Ahmed ";
console.log(txt);

let newVal = txt.trimStart(); // Remove spaces from start.
console.log(newVal);

newVal = txt.trim();   // Remove spaces from both.
console.log(newVal);


// ------- padStart/End Function -------
let text = "A";
let pad = text.padStart(4 , "7");  // 4 -> lenght of text , 7 -> add 7 to start to complete the lenght.
console.log(pad);  // 777A

pad = text.padEnd(4 , "7");
console.log(pad);  // A777 

// ------- charAt Function -------
var string = "Ahmed";
var char = string.charAt(0); // Get the char at index 0.
console.log(char); 

// ------- charCodeAt Function -------
char = string.charCodeAt(0);
console.log(char); 

// ------- Property Access -------
char = string[0];
console.log(char); 

// ------- Split Method -------
var data = "I,Love,Js";
let addToArray = data.split(","); // Cut string according to ',' and add string to array.
console.log(addToArray);

// ------- Search Method -------
var data = "Web Devolopment";
var result = data.search("Web");  // search for the index.
console.log(result);

// ------- Match Method -------
let data2 = "JAvascript Web Devoloper";
let search = data2.match(/a/gi);  // search for 'a' in whole txt.
console.log(search);


// ------- Includes Method -------
let data3 = "JAvascript Web Devoloper";
let search2 = data3.includes("web");  // If 'a' includes return true.
console.log(search2);