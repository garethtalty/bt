FROM node:12 as aleph-client
WORKDIR /@aleph/client/
RUN npm install --silent
COPY . ./
RUN npm build
CMD ["node", "node_modules/serve/bin/serve.js", "-p", "8080", "-s", "./dist"]
