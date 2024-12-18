const {clipboard, webContents} = require('electron')

let lastClipboardText = null

const createInterval = (mainWindow) => {
    setInterval(() => {
        let text = clipboard.readText()
        if (text === lastClipboardText) {
            return
        }
        lastClipboardText = text
        console.log('text: ', text)
        if (mainWindow) {
            mainWindow.webContents.send('clipboard-event', text)
        }
    }, 1000)
}

module.exports = createInterval