const {clipboard} = require('electron')

let lastClipboardText = null

setInterval(() => {
    let text = clipboard.readText()
    if (text === lastClipboardText) {
        return
    }
    console.log('text: ', text)
}, 1000)