const express = require('express')
const path = require('path')
const { loadEnvConfig } = require('@next/env');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig('../../', dev)

const app = next({ dev })
const handle = app.getRequestHandler();
const port = process.env.PORT;
app.prepare().then(() => {
    const server = express()
    server.use(express.static(path.join(__dirname, '../../public')))
    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
