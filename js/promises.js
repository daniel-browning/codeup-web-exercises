//resolve (reject not asked for in directions

let wait = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Done');
        }, ms);
        })
    };

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const getLastCommitDate = (username => {
    const url = (`https://api.github.com/users/${username}/events`);
    fetch(url)
    .then(data => data.json())
    .then((data) => console.log(data));

});

getLastCommitDate("daniel-browning");

// getGithubUsername().then((usernames) => {
//     usernames.forEach((username) => {
//         // do something with each username
//     });
// }).catch(error => console.error(error));