const metrics = require("./metrics");
const stats = require("./stats");

module.exports = async fastify => {
  fastify
    .register(metrics, { prefix: "/metrics" })
    .register(stats, { prefix: "/stats" });
};
