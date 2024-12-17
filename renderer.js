const versionDom = document.getElementById('version')

versionDom.innerHTML = `<li>${versions.node()}</li><li>${versions.chrome()}</li><li>${versions.electron()}</li>`

const pingFunc = async() => {
    const response = await window.versions.ping()
    versionDom.innerHTML = `<li>${response}</li>`
}
pingFunc()