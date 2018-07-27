console.log('destructuring.js');

const person = {
    name: 'Eugene',
    age: 23,
    location: {
        city: 'Zaporizhya',
        temp: 28
    }
};

// const name = person.name;
// const age = person.age;

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (temperature && city)
{
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    name: 'Ego is an Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);