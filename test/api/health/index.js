const tap = require("tap");

const server = require("../../../lib/server");

tap.test("health api", t => {
  t.plan(1);
  t.test("when i make a http get to /health", tc => {
    const fastify = server();
    tc.tearDown(() => fastify.close());
    fastify.inject(
      {
        method: "GET",
        url: "/health",
        accept: "application/json"
      },
      (err, response) => {
        tc.error(err, "it should not return an error");
        tc.strictEqual(response.statusCode, 200, "it should return 200");

        const json = JSON.parse(response.body);
        tc.ok(json.status, "it should include status attribute");
        tc.end();
      }
    );
  });
});
