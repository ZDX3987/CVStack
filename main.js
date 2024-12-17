const {app, Tray, Menu, BrowserWindow, ipcMain, BaseWindow, screen} = require('electron')
const path = require('node:path')
const createTray = require('./src/main/tray')
const createMainWindow = require('./src/main/mainWindow')

let mainWindow = null
app.whenReady().then(() => {
    mainWindow = createMainWindow()
    createTray(mainWindow)
})