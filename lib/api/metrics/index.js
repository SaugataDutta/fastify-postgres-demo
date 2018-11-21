const Prometheus = require("prom-client");

module.exports = async fastify => {
  fastify.get("/", async (req, reply) => {
    reply.header("Content-Type", Prometheus.register.contentType);
    return Prometheus.register.metrics();
  });
};
