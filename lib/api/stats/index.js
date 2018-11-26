const pkg = require("../../../package");
const schemas = require("./schemas");

module.exports = async fastify => {
  fastify.get("/", schemas.stats, async () => {
    const stats = {
      name: pkg.name,
      version: pkg.version,
      stats: fastify.memoryUsage()
    };

    return stats;
  });
};
