const fastify = require("./lib/server")();

const start = async () => {
  try {
    await fastify.ready();
    await fastify.listen(fastify.config.PORT, fastify.config.HOST);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
