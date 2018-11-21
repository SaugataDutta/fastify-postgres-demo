const tap = require("tap");

const server = require("../../../lib/server");

tap.test("health api", t => {
  t.plan(1);
  t.test("when i make a http get to /health", assert => {
    const fastify = server();
    fastify.inject(
      {
        method: "GET",
        url: "/health",
        accept: "application/json"
      },
      (err, response) => {
        assert.error(err, "it should not return an error");
        assert.strictEqual(response.statusCode, 200, "it should return 200");

        const json = JSON.parse(response.body);
        assert.ok(json.name, "it should include name attribute");
        assert.ok(json.version, "it should include version attribute");
        assert.end();
      }
    );
  });
});
