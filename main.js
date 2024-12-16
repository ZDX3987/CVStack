const {app, Tray, Menu} = require('electron')

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
})