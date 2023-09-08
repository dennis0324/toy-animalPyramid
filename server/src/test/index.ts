import path from 'path'
import fs from 'fs'


// path.resolve()
const fss = fs.readdirSync(path.join(process.cwd(),'src','socket-io'),{ withFileTypes: true }).filter(file => file.isDirectory())
console.log(fss)