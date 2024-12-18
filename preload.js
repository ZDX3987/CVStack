const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('commonEvent', {
    clipboardEvent: (callback) => ipcRenderer.on('clipboard-event', (event, text) => callback(event, text))
})