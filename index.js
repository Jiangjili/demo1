var myVariable = true; //boolean
var myVariable2 =3; //number
var myVariable3 ="myName"; //string
var myVariable4 =[1,2,3,4]; //array

myVariable =false;
myVariable2=12;

//DECLARE DEFINE
function myFunction (arg){
//do something
console.log(arg);
var result = arg *2;
console.log(result);

}
//CALL EXECUTION FIRE
myFunction(myVariable2);


console.log('Hello world!');

document.getElementById('form').onsubmit= function(e){
    const myName = document.getElementById('name').value;
    console.log(document.getElementById('name'))
    console.log(myName)
    e.preventDefault();
document.getElementById('showuser').innerHTML=`
<p>${myName}</p>
`}  