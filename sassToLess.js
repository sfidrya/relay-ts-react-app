const fs = require('fs/promises')

const sassFileName = 'antd.customize.scss'
const lessFileName = 'antd.customize.less'
const pathToSass = ''

fs.readFile(sassFileName, "utf8")
.then(sassText => {
  const lessText = sassText.replace(/\$/g, "@")
  return fs.writeFile(lessFileName, lessText)
}).then(result => {
  console.log('succesfully converted to less')
})
.catch(err => {
  console.error("error: converting sass to less failed ", err)
})