const clipboardStack = document.getElementById('clipboard-stack')
window.commonEvent.clipboardEvent((event, text) => {
    console.log('event: ' + text)
    let firstChild = clipboardStack.firstChild
    let newLi = document.createElement('li')
    let newDiv = document.createElement('div')
    newDiv.innerHTML = text
    newLi.appendChild(newDiv)
    if (firstChild) {
        clipboardStack.insertBefore(newLi, firstChild);
    } else {
        clipboardStack.appendChild(newLi)
    }
})

