import { app } from './src/app.js'

const port = app.get('port')

// Application initialization
const init = async () => {
  app.listen(port, () => {
    console.log(`Server ON http://localhost:${port}`)
  })
}

init()
