const clipboardStack = document.getElementById('clipboard-stack')

window.commonEvent.clipboardEvent((event, text) => {
    console.log('event: ' + text)
    clipboardStack.innerHTML = `<li>${text}</li>`
})

