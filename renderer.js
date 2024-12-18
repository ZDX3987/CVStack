const SELECTED_CLASS_NAME = 'selectedText'
const clipboardStack = document.getElementById('clipboard-stack')
window.commonEvent.clipboardEvent((event, text) => {
    console.log('event: ' + text)
    let firstChild = clipboardStack.firstChild
    let newLi = document.createElement('li')
    let newDiv = document.createElement('div')

    let selectedNodeList = clipboardStack.getElementsByClassName(SELECTED_CLASS_NAME)
    if (selectedNodeList && selectedNodeList.length > 0) {
        Array.from(selectedNodeList).forEach(node => node.classList.remove(SELECTED_CLASS_NAME))
    }

    newLi.classList.add(SELECTED_CLASS_NAME)
    newDiv.innerHTML = text
    newLi.appendChild(newDiv)
    if (firstChild) {
        clipboardStack.insertBefore(newLi, firstChild);
    } else {
        clipboardStack.appendChild(newLi)
    }
})
