let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
let myArray2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let j = 0;

while (j < myArray2.length) {
  console.log(myArray2[j++]);
}

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
 cats.push(name);
}

function destructivelyPrependCat(name){
  cats.unshift(name);
 }
 function destructivelyRemoveLastCat(name){
  cats.pop(name);
 }
 function destructivelyRemoveFirstCat(name){
  cats.shift(name);
 }
 function appendCat(name){
  const newArray = cats.concat(name);
  return newArray
 }
 function prependCat(name){
  return  [name, ...cats];
 }
 function removeLastCat(name){
 return cats.slice(0, 2);

 }
 function removeFirstCat(name){
  return cats.slice(1, 3);
 
  }
