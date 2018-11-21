FROM mhart/alpine-node:10 as builder
 
WORKDIR /app

COPY . /app

RUN npm install --no-audit --production

FROM mhart/alpine-node:base-10

COPY --from=builder /app /app

WORKDIR /app

ENV PORT=4444 \
	NODE_ENV=production \
	LOG_LEVEL=error

EXPOSE $PORT

# run the service
CMD ["node", "index.js"]
