const metrics = require("./metrics");
const health = require("./health");

module.exports = async fastify => {
  fastify
    .register(health, { prefix: "/health" })
    .register(metrics, { prefix: "/metrics" });
};
