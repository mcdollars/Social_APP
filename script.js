const fs = require('fs')
function copyEnvFileSync() {
  let env = process.env.NODE_ENV
  if (!process.env.NODE_ENV) {
    env = "dev"
  }
  const fileData = fs.readFileSync(`src/env/env.${env.trim()}.js`, 'utf-8')
  fs.writeFileSync('src/env/env.js', fileData, 'utf-8')
  console.log("Environment file copied successfully!")
}

copyEnvFileSync()