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

// console.log({ every })

// .map

const map = array.map((product) => {
    return {
        ...product,
        subtotal: product.quantity * product.price
        }
});
// console.log({map})


// . filter 
const filter = array.filter((product) => {
    return product.quantity > 1
})

//console.log({filter})

// .reduce

const reduce = array.reduce((accumulator, product) => {
    console.log(product)
    return accumulator + (product.price * product.quantity)
    
}, 0)

console.log({ reduce })



