const {app, BaseWindow, screen} = require('electron')

const createMainWindow = () => {
    const primaryDisplay = screen.getPrimaryDisplay()
    const {width, height} = primaryDisplay.workAreaSize
    const mainWindow = new BaseWindow({
        width: 300,
        height: 600,
        x: width - 350,
        y: height - 600,
        icon: 'assert/image/secondicon.png',
        title: 'CVStack',
        transparent: true,
        maximizable: false,
        minimizable: false,
        movable: true,
        skipTaskbar: true
    })
    mainWindow.setVibrancy('light')
    mainWindow.setMenuBarVisibility(false)
    mainWindow.on('blur', (e) => {
        console.log('mainWindow hide...')
        mainWindow.hide()
    })
    return mainWindow
}

module.exports = createMainWindow