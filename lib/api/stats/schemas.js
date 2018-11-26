const stats = {
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
          },
          stats: {
            type: "object",
            additionalProperties: false,
            properties: {
              eventLoopDelay: {
                type: "number"
              },
              rssBytes: {
                type: "integer"
              },
              heapUsed: {
                type: "integer"
              }
            }
          }
        },
        required: ["name", "version", "stats"]
      }
    }
  }
};

module.exports = {
  stats
};
