const {BrowserWindow, screen} = require('electron')
const path = require('node:path')

const createMainWindow = () => {
    const primaryDisplay = screen.getPrimaryDisplay()
    const {width, height} = primaryDisplay.workAreaSize
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 600,
        x: width - 350,
        y: height - 600,
        icon: 'assert/image/secondicon.png',
        title: 'CVStack',
        // transparent: true,
        maximizable: false,
        minimizable: false,
        movable: true,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: false, // 关闭 nodeIntegration
            contextIsolation: true, // 启用 contextIsolation
            preload: path.join(__dirname, '../..', 'preload.js'), // 指定 preload.js 的路径
        }
    })
    mainWindow.setVibrancy('light')
    mainWindow.setMenuBarVisibility(false)
    mainWindow.on('blur', (e) => {
        console.log('mainWindow hide...')
        // mainWindow.hide()
    })
    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.webContents.send('main-window-loaded', 'Hello CVStack')
    return mainWindow
}

module.exports = createMainWindow