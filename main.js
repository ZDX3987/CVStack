const {app, BrowserWindow} = require('electron')


const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        title:'CVStack'
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})