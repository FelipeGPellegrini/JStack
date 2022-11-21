const user = {
    firstName: 'Felipe',
    lastName: 'Pellegrini',
    full_name: 'Nome Completo',
    age: 17,
    instagram: '@eu_flp',
    skills: ['Front-end', 'Photoshop']
}

//Rest operator

const { firstName, skills, ...restoUser } = user;
const [primary, ...restoSkills] = skills

console.log(restoUser)