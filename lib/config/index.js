module.exports = {
  type: "object",
  properties: {
    NODE_ENV: {
      type: "string",
      default: "development"
    },
    HOST: {
      type: "string",
      default: "127.0.0.1"
    },
    PORT: {
      type: "integer",
      default: 4444
    }
  }
};
