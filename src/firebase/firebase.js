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

database.ref().on('value', (snapshot) => {
    const val = snapshot.val()
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
})

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })
//
// // const onValueChange = (snapshot) => {
// //     console.log(snapshot.val())
// // }
// // database.ref().on('value', onValueChange)
//
// setTimeout(() => {
//     database.ref('age').set(12);
// }, 3500)
//
// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)
//
// // setTimeout(() => {
// //     database.ref().off(onValueChange)
// // }, 7000)
//
// setTimeout(() => {
//     database.ref('age').set(44);
// }, 10500)


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data. ', e)
//     })

// database.ref().set({
//     name: "Eugene Ch",
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Kiev',
//         country: 'Ukraine'
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This failed. ', e)
// })
//
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city' : 'Seattle'
// })

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