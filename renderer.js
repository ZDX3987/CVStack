const clipboardStack = document.getElementById('clipboard-stack')

clipboardStack.innerHTML = `<li>${versions.node()}</li><li>${versions.chrome()}</li><li>${versions.electron()}</li>`
