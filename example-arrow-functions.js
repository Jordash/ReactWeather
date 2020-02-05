var names = ['Andres', 'clark', 'Chauncey'];

names.forEach(
  function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));



var returnMe = (name) => name + "!";
console.log(returnMe('kjgl'));
function add (a, b) {
  return a + b;
}

//Challenge:
//1. use curly braces to specify return value
var curly = (a, b) => {
  return a+b;
};
console.log( 'curly ', curly(3,5) );

//2. expression syntax to handle everything on one line
var oneLine = (a, b) => a + b;
console.log(oneLine(3,5));
