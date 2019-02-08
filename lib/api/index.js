const metrics = require("./metrics");
const users = require("./users");
const stats = require("./stats");

module.exports = async fastify => {
  fastify
    .register(metrics, { prefix: "/metrics" })
    .register(stats, { prefix: "/stats" })
    .register(users, { prefix: "/users" });
};
