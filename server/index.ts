export {}

import * as fastify from 'fastify'
import { Builder, Nuxt } from 'nuxt'
// Import and Set Nuxt.js options
import * as config from '../nuxt.config'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build only in dev mode
  if (!(process.env.NODE_ENV === 'production')) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  const server = (fastify as any)({
    logger: true
  })

  server.use(nuxt.render)

  server.listen(port, host, (err, address) => {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
  })
}

start()
