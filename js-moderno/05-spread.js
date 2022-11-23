const user = {
    firstName: 'Felipe',
    lastName: 'Pellegrini',
    age: 18,
    instagram: '@eu_flp',
    skills: ['Front-end', 'Photoshop'],
    active: false
}

//Spread (espalhar) operator
const updatedUser = {
    ...user,
    skills: [...user.skills, 'Marketing'],
    active: true
}

console.log({user})
console.log({updatedUser})