import express from 'express'

import { apiRoutes } from './routes/api.routes'
import { rootRoutes } from './routes/root.routes'

// prevent "undefined window" errors on server-side
global.window = {}

const PORT = process.env.PORT ?? 8080
const app = express()

app.use(express.static('./build', { index: false }))
app.use('/api', apiRoutes)
app.use('/', rootRoutes)

app.listen(PORT, () => {
  console.log(`server listening @ http://localhost:${PORT}`)
})
