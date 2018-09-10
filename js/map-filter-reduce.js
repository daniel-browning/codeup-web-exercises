const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'daniel',
        email: 'daniel@codeup.com',
        languages: ['java', 'javascript', 'english'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Filter
console.log(users.filter(user => {
    return (user.languages.length >= 3);
}))

// var usersEmails = users.map(function(user) {
//     return user.email;
// });

//ES6 Map
const usersEmails = users.map(user => user.email);
console.log(usersEmails);

//instructor solution for Map
// console.log(users.map(user => {
//     return user.email;
// }));

//Reduce

console.log(users.reduce((sum, user) => {
    return sum + user.yearsOfExperience;
}, 0));

let totalYearsExp = users.reduce((sum, user) => {
    return sum + user.yearsOfExperience;
}, 0);
let averageExp = totalYearsExp/users.length;
console.log(averageExp);

console.log(users.reduce((longest, user) => {
    if (user.email.length > longest.length)
        return user.email;
    else return longest;
}, ""));

console.log(users.reduce((message, user, i) => {
    if (i < users.length-1)
        return `${message} ${user.name},`
    else return `${message} ${user.name}.`
}, "Your instructors are: "));

