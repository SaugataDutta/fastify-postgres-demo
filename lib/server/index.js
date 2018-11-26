const fastify = require("fastify")({
  logger: { level: process.env.LOG_LEVEL || "info" }
});
const fastifyEnv = require("fastify-env");
const prometheus = require("../plugins/prometheus");
const configSchema = require("../config");
const underPressure = require("under-pressure");
const api = require("../api");

function server() {
  fastify
    .register(fastifyEnv, { schema: configSchema })
    .register(prometheus)
    .register(underPressure, {
      maxEventLoopDelay: 1000,
      exposeStatusRoute: "/health"
    })
    .register(api);

  return fastify;
}

module.exports = server;
