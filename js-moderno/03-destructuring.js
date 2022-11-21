const user = {
    firstName: 'Felipe',
    lastName: 'Pellegrini',
    age: 17,
    instagram: '@eu_flp',
    skills: ['Front-end', 'Photoshop']
}

//Destructuring
const { firstName, age: idade, skills } = user;
const [primary, secondary] = skills

console.log(idade)