const {Tray, Menu} = require('electron')

const createTray = (mainWindow) => {
    const tray = new Tray('assert/image/secondicon.png')
    const trayMenu = Menu.buildFromTemplate([
        {label: '暂停'},
        {label: '设置'},
        {label: '关于'},
        {label: '退出', role: 'quit'}
    ])
    tray.setContextMenu(trayMenu)
    tray.setToolTip('CVStack')
    tray.on('click', (e) => {
        console.log('CVStack showed')
        mainWindow.show()
    })
}

module.exports = createTray