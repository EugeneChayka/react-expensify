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
    stressLevel: 6,
    job: {
        title: 'Dev',
        company: 'Google'
    },
    location: {
        city: 'Kiev',
        country: 'Ukraine'
    }
}).then(() => {
    console.log('Data is saved!')
}).catch((e) => {
    console.log('This failed. ', e)
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city' : 'Seattle'
})

// database.ref().update({
//     job: 'manager',
//     'location/city' : 'Boston'
// })

// database.ref('isSingle').set(null)

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     })
//     .catch((e) => {
//         console.log('Data was NOT removed', e)
//     })