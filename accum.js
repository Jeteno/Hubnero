function accum(string) {
   let result = '';
   for (let i = 0; i < string.length; i++) {
      result += string[i].toUpperCase() + string[i].toLowerCase().repeat(i)+ '-';
   }

   return result.slice(0, -1);
}

console.log('/----accum----/')
console.log("abcd -",  accum("abcd"));  
console.log("RqaEzty -", accum("RqaEzty")); 
console.log("cwAt -", accum("cwAt")); 