//Number DataType
let numValue1 = 10; 

console.log("************************Positive Number*****************************");
console.log(typeof(numValue1));

let strValue1 = String(numValue1); //String method is used to convert the data
console.log(strValue1);
console.log(typeof(strValue1));

let boolValue1 = Boolean(numValue1);
console.log(boolValue1); //Since the variable had the data in it, it gave output "true";
console.log(typeof(boolValue1));


numValue1 = -16;

console.log("************************Negative Number*****************************");
console.log(typeof(numValue1));

let strValue2 = String(numValue1); //String method is used to convert the data into string
console.log(strValue2);
console.log(typeof(strValue2));

let boolValue2= Boolean(numValue1); //Boolean method is used to convert the data into boolean
console.log(boolValue2); //Since the variable had the data in it, it gave output "true";
console.log(typeof(boolValue2));


numValue1 = 0;

console.log("************************0 as Number*****************************");
console.log(typeof(numValue1));

let strValue3 = String(numValue1); //String method is used to convert the data into string
console.log(strValue3);
console.log(typeof(strValue3));

let boolValue3= Boolean(numValue1);
console.log(boolValue3); //false;
console.log(typeof(boolValue3));

console.log("**********************************************************************************************************************************************");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//String DataType
let strValue4 = 111;

//Convert Value from string to Number
let numValue4 = Number(strValue4);
console.log(numValue4);

//Convert value from string to boolean
let boolValue4 = Boolean(strValue4);
console.log(boolValue4); //Since it has any value, it is returning true

let strValue5 = "JavaScript";

//Converting string to Number
let numValue5 = Number(strValue5); //NaN - Not a number
console.log(numValue5);

//Converting string to Boolean
let boolValue5 = Boolean(strValue5);
console.log(boolValue5); //Boolean returns "true" for every value except - undefined, null, 0

//Checking the same with Undefined and null
let strValue6 = undefined;
numValue5 = Number(strValue6);
console.log(numValue5); //NaN
boolValue5 = Boolean(strValue6);
console.log(boolValue5); //Boolean returns "false" for every value except - undefined

let strValue7 = null;
numValue5 = Number(strValue6);
console.log(numValue5); //NaN
boolValue5 = Boolean(strValue6);
console.log(boolValue5); //Boolean returns "false" for every value except - undefined, null

let strValue8 = "0";
numValue5 = Number(strValue6);
console.log(numValue5); //NaN
boolValue5 = Boolean(strValue6);
console.log(boolValue5); //Boolean returns "false" for every value except - undefined, null, 0

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Boolean DataType
let boolValue6 = true; //false

numValue1 = Number(boolValue6);
console.log(numValue1);
strValue1 = String(boolValue6);
console.log("This is string Value- " + strValue1);


let strValue9 = "0";
console.log(strValue9); //0 in string
console.log(Number(strValue9)); //0 in Number
console.log(Boolean(Number(strValue9))); //false











