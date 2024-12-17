const {app, globalShortcut} = require('electron')
const createTray = require('./src/main/tray')
const createMainWindow = require('./src/main/mainWindow')

let mainWindow = null
app.whenReady().then(() => {
    mainWindow = createMainWindow()
    createTray(mainWindow)
})