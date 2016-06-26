let R = require('ramda')
const log = (text) => console.log(text)
const JSONtab = (obj) => JSON.stringify(obj, true, 4)
const logJSON = (obj) => log(JSONtab(obj))

let l1 = [1, 2, 3, 4]
let l2 = R.map(n => n * n, l1)
console.log(l2)

let note = {
    noteId: '1234',
    timeInClip: 123
}

logJSON(note)
