const array = [
    { name: 'Iphone', price: 5000, quantity: 2 },
    { name: 'MacBook Pro', price: 20000, quantity: 1 },
    { name: 'Magic Mouse', price: 1000, quantity: 5 }
]

// .find & findIndex
const find = array.find((product) => product.price > 1000);
// console.log(find)

const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
// console.log(findIndex)

// .some & .every

const some = array.some((product) => product.price < 1000);

// console.log({ some })

const every = array.every((product) => product.price >= 1000);

console.log({ every })



