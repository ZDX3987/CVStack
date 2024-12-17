const {app, Tray, Menu, BrowserWindow, ipcMain} = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        title:'CVStack',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

let tray = null
app.whenReady().then(() => {
    tray = new Tray('image/secondicon.png')
    const trayMenu = Menu.buildFromTemplate([
        {label: '关于', type: 'normal'},
        {label: '退出', type: 'normal', click: () => {
                console.log('这是点击了')}}
    ])
    tray.setContextMenu(trayMenu)
    tray.setToolTip('CVStack')
    
    ipcMain.handle('ping', () => 'pong')
    createWindow()
})