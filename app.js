const http = new EasyHttp3;

// http.get('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


const data = {
    name: 'Joe',
    username: 'joedoe',
    email: 'jdoe@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/3', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(data => console.log(data))
    .catch(err => console.log(err));