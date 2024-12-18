const {app} = require('electron')
const createTray = require('./src/main/tray')
const createMainWindow = require('./src/main/mainWindow')
const createInterval = require('./src/main/main')
let mainWindow = null

app.whenReady().then(() => {
    mainWindow = createMainWindow()
    debugger;
    createTray(mainWindow)
    createInterval(mainWindow)
})