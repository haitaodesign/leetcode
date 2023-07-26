const fs = require('fs-extra')

const dir = 'code-js'
async function getDirList () {
    const res = await fs.readdirSync(dir)
    console.log('code-js 总数', res.length)
}

getDirList()