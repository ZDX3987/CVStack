const {app} = require('electron')
const Store = require('electron-store')
const createTray = require('./src/main/tray')
const createMainWindow = require('./src/main/mainWindow')
const createInterval = require('./src/main/main')
let mainWindow = null

const store = new Store()

store.onDidChange('clipboardPause', (newValue, oldValue) => {
    console.log('clipboardPause value: ' + newValue)
})

app.whenReady().then(() => {
    mainWindow = createMainWindow()
    debugger;
    createTray(mainWindow)
    createInterval(mainWindow)
})