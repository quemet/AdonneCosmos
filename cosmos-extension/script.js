const { exec } = require('child_process') // Module permetttant d'éxecuter des sous processus
const data = require('./package.json') // Importe les données du JSON
const fs = require('node:fs') // Module qui permet de travailler avec le systéme de fichier

let currentVersion = data.version // Prend la version courante de l'extension dans le package.json
let extensionName = data.name // Prend le nom de l'extension dans le package.json
let arrayVersion = currentVersion.split('.').map((v) => Number(v)) // Récupére chaque nombre de version pour les transformer en int; La version est un string dans le package.json

arrayVersion[2] = arrayVersion[2] + 1 // Incrémente la version de 1

data.version = arrayVersion.join(".") // Mise en forme du tableau pour joindre celui du json

fs.writeFileSync('./package.json', JSON.stringify(data, null, 4)) // Récrit le json pour update la version

exec('vsce package') // Compresse l'extension sous le format .vsix
exec(`rm ${extensionName}-${currentVersion}.vsix`) // Supprime l'ancien fichier
