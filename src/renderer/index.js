const {ipcRenderer} = require('electron')

const createListener = () => {
    ipcRenderer.on('clipboard-event', (event, text) => {
        console.log('event: '+ text)
    })
}

module.exports = createListener