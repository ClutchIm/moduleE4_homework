const str = 'name'
const user1 = {
    username: 'JohnSmith007',
    email: 'johnSmith007@gmail.com',
}
const user2 = {
    name: 'John',
    surname: 'Smith'
}

const haveProperty = (prop, obj) => {
    return prop in obj;
}

console.log(haveProperty(str, user1))
console.log(haveProperty(str, user2))