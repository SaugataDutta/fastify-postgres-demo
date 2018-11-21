const pkg = require("../../../package");
const schemas = require("./schemas");

module.exports = async fastify => {
  fastify.get("/", schemas.health, async () => {
    const info = {
      name: pkg.name,
      version: pkg.version
    };

    return info;
  });
};
