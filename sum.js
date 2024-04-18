const products = [
   { name: 'Футболка', price: 20, quantity: 2 },
   { name: 'Джинсы', price: 50, quantity: 1 },
   { name: 'Носки', price: 5, quantity: 10 },
   { name: 'Штаны', price: 30, quantity: 1 }
];

function sumPrice(arr) {
   let result = 0;
   
   arr.forEach(item => {
      result += item.price * item.quantity
   })

   return result
}

console.log('/----sum----/')
console.log(sumPrice(products))