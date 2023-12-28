export function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
}
export function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
}
export function getPopulation(){
    return fetch('https://65889f83f50084a15a58a247.mockapi.io/api/plants/population')
    .then(res => res.json());
}