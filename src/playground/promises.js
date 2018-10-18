const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Evg',
        //     age: 24
        // })
        reject('Something went wrong!')
    }, 1500)
})

console.log('before')

// promise.then((data) => {
//     console.log('1', data)
// }, (error) => {
//     console.log('error:', error)
// })

promise.then((data) => {
    console.log('1', data)
}).catch((error) => {
    console.log('error', error)
})

console.log('after')
