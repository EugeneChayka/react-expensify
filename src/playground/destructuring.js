//
// Object destructuring
//
// console.log('destructuring.js');
//
// const person = {
//     name: 'Eugene',
//     age: 23,
//     location: {
//         city: 'Zaporizhya',
//         temp: 28
//     }
// };
//
// // const name = person.name;
// // const age = person.age;
//
// const {name: firstName = 'Anonymous', age} = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (temperature && city)
// {
//     console.log(`It's ${temperature} in ${city}.`);
// }
//
// const book = {
//     name: 'Ego is an Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You're in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', "$2.50", "$2.75"];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);