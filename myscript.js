/*var arr = [-1, -5, -3];
function someValue(arr){
  return arr.every(function(value, index, arr){
    return value < -10;
});
}

console.log(someValue(arr));


//console.log(arr.reverse());

function hasOddNumber(arr){
 return arr.some(function(val){
    return val % 2!==0;
    });
}
    
console.log(hasOddNumber([1,2,2,2,2,2,4])); 
console.log(hasOddNumber(arr)); 

//var num = 3332123213101232321;
var num = 898;
function hasAZero(num){
  return num.toString().split('').some(function(val){
    return val==='0';
  });
}
console.log(hasAZero(num));
console.log(hasAZero(num.toString().split('')));

function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Болтушка', 'лабрадор', 'шоколадный', 'девочка');
console.log(theDog.toString()); // вернёт [object Object] 

//var arr = [2, 4, 8];


function hasOnlyOddNumbers(arr){
  return arr.every(function(val){
    return val % 2!==0;
    });
}

console.log(hasOnlyOddNumbers(arr)); 

function hasNoDuplicates(arr){
  return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
console.log(hasNoDuplicates(arr)); */ 

var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    

function hasCertainKey(arr, key){
  return arr.every(function(val){
    return key in val;
  });
}
console.log(hasCertainKey(arr,'first')); 
console.log(hasCertainKey(arr,'isCatOwner')); // false 

var arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
  {title: "Instructor", first: 'Matt', last:"Lane"}, 
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key]===searchValue;
  });
}

console.log(hasCertainValue(arr,'title','Instructor')); // true
console.log(hasCertainValue(arr,'first','Elie')); // false
