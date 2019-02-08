const SampleInfo = require("../../model/SampleInfo");
const Sequelize = require("sequelize");

module.exports = async fastify => {
  fastify.get("/", async (req, reply) => {
    return SampleInfo.findAll();
  });
  fastify.get("/:userId", async (req, reply) => {
    return SampleInfo.findById(req.params.userId);
  });
  fastify.post("/", async (req, reply) => {
    return SampleInfo.create(req.body);
  });
  fastify.put("/:userId", async (req, reply) => {
    return SampleInfo.update(
      {
        country: req.body.country
      },
      {
        returning: true,
        where: {
          id: {
            [Sequelize.Op.eq]: req.params.userId
          }
        }
      }
    ).then(function([rowsUpdate, [updatedUser]]) {
      return updatedUser;
    });
  });
};
