# Fastify API Server

Bootstrapping an API Server using [fastify](https://github.com/fastify/fastify)

## Node

- [pino](https://github.com/pinojs/pino) for logging
- [fastify-env](https://github.com/fastify/fastify-env) for environment
- [prometheus](https://github.com/siimon/prom-client) for metrics
- [npm](https://www.npmjs.com/) as the build tool
- [tap](https://www.node-tap.org/) for testing
- [istanbul](https://istanbul.js.org/docs/tutorials/tap/) for testing coverage

### Available Scripts

To view the list of scripts

```console
$ npm run
```

## Docker

The `Dockerfile` is based on `mhart/alpine-node:base-10` and lacks a `npm`
binary. It is assumed that dependencies are built prior running the container.

## Kubernetes

There is a `helm` chart to deploy the application to Kubernetes, which includes
`deployment`, `service`, `ingress` and `hpa` resources. We should use `--set`
to override the default values but if that becomes too verbose consider using
env specific values file `<env>-values.yaml`.

## GitLab

This repository makes use of a number of generic stages from `ci-reuse`,
including docker build and some linting stages. We have added `helm lint`and
`deploy` stages.

The following secret variables must be defined in GitLab.

| Variable        | Description                                            |
| --------------- | ------------------------------------------------------ |
| DEPLOY_TOKEN    | The deploy token to read the registry during deploy    |
| DEPLOY_PASSWORD | The deploy password to read the registry during deploy |
