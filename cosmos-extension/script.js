const { exec } = require('child_process')
const data = require('./package.json')
const fs = require('node:fs')

let currentVersion = data.version
let extensionName = data.name
let arrayVersion = currentVersion.split('.').map((v) => Number(v))

arrayVersion[2] = arrayVersion[2] + 1

data.version = arrayVersion.join(".")

fs.writeFileSync('./package.json', JSON.stringify(data, null, 4))

exec('vsce package')
exec(`rm ${extensionName}-${currentVersion}.vsix`)
