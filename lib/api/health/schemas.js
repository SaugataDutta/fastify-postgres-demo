const health = {
  schema: {
    response: {
      200: {
        type: "object",
        additionalProperties: false,
        properties: {
          name: {
            type: "string"
          },
          version: {
            type: "string"
          }
        },
        required: ["name", "version"]
      }
    }
  }
};

module.exports = {
  health
};
