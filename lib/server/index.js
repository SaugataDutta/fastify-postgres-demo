const fastify = require("fastify")({
  logger: { level: process.env.LOG_LEVEL || "info" }
});
const fastifyEnv = require("fastify-env");
const prometheus = require("../plugins/prometheus");
const configSchema = require("../config");
const api = require("../api");

function index() {
  fastify
    .register(fastifyEnv, { schema: configSchema })
    .register(prometheus)
    .register(api);

  return fastify;
}

module.exports = index;
