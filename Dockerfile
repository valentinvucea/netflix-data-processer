FROM node:lts-alpine

# app folder is the current working directory
WORKDIR /app

# copy package.json and package-lock.json (if available)
COPY package*.json ./

ENV NODE_OPTIONS=--max-old-space-size=8192

# install project dependencies
RUN npm install

CMD [ "npm", "run", "serve" ]