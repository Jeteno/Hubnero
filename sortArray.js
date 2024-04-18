const array = [20, "105", 140, 90, "10", 70, "85", 60, "55", 100, "75", 130, "45", 8, "65", 110, "125", 5, "35", 80, "25", 50, "115", 120, "95", 110, "135", 30, "145", 40];
const arrayTwo = [15, "25", 30, 40, "35", 50, "10", 20, "45", 60, "55", 70, 80, "65", 90, "75", 85, 95, "100", "105", 110, "115", 125, 130, "120", 140, "135", "145", 5, "95"];


function sortArray(arr) {
   if(arr.length <= 1) {
      return arr;
   }

   let pivotIndexElement = Math.floor(arr.length / 2);
   let pivotElement = Number(arr[pivotIndexElement]);
   let less = [];
   let greater = [];

   for(let i = 0; i < arr.length; i++) {
      if(i === pivotIndexElement) continue
      if(arr[i] < pivotElement){
         less.push(arr[i]);
      } else {
         greater.push(arr[i]);
      }
   }

   return [...sortArray(less), pivotElement, ...sortArray(greater)]
}

console.log('/----sortArray----/')
console.log(sortArray(array));
console.log(sortArray(arrayTwo));