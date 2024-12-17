const {clipboard} = require('electron')
const clipboardStack = document.getElementById('clipboard-stack')

setInterval(() => {
    let text = clipboard.readText()
    console.log('text: ', text)
    clipboardStack.innerHTML = `<li>${text}</li>`
}, 1000)