import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDxPcjFbXPeWN4E7UGEZderKSC_9xPvtD4",
    authDomain: "the-best-expensify-app.firebaseapp.com",
    databaseURL: "https://the-best-expensify-app.firebaseio.com",
    projectId: "the-best-expensify-app",
    storageBucket: "the-best-expensify-app.appspot.com",
    messagingSenderId: "672283207498"
};

firebase.initializeApp(config)

const database = firebase.database()

database.ref().set({
    name: "Eugene Ch",
    age: 24,
    isSingle: false,
    location: {
        city: 'Kiev',
        country: 'Ukraine'
    }
})

// database.ref().set('This is my data.')

database.ref('age').set(27)
database.ref('location/city').set('Lviv')

database.ref('attributes/height').set('1.80 m')
database.ref('attributes/weight').set('70 kg')

console.log('I made a request to change the data.')