const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
}

export const createClient = (config = defaultConfig) => {
  return contentful.createClient({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN
  })
}
