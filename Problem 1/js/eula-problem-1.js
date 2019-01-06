const range = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
}

console.log(range(0, 1000, 3));
//[1, 2, 3, 4, 5, 6, 7, 8, 9]
const range1 = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
}

var allArray= [range1(0, 1000, 3) + range1(0, 1000,5)];

console.log("allArray 2 " + allArray);

var deduped = Array.from( new Set([allArray]) );

console.log("deduped 2 "+ deduped); 
