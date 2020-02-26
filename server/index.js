import 'dotenv/config';

import express from 'express';
import consola from 'consola';

import { Nuxt, Builder } from 'nuxt';
import config from '../nuxt.config';

const app = express();

config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { HOST, PORT } = process.env;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(PORT, HOST);
  consola.ready({
    message: `Server listening on http://${HOST}:${PORT}`,
    badge: true,
  });
}

start();
