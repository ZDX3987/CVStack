const {Tray, Menu, app} = require('electron')

const createTray = (mainWindow) => {
    const tray = new Tray('assert/image/secondicon.png')
    const trayMenu = Menu.buildFromTemplate([
        {label: '关于'},
        {label: '退出', click: (e) => {
            console.log('CVStack has been quited')
            app.quit()
        }}
    ])
    tray.setContextMenu(trayMenu)
    tray.setToolTip('CVStack')
    tray.on('click', (e) => {
        console.log('CVStack showed')
        mainWindow.show()
    })
}

module.exports = createTray