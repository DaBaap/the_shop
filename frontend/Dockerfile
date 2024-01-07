FROM node:18-alpine

WORKDIR /react-docker/

COPY public/ /react-docker/public
COPY src/ /react-docker/src
COPY package.json /react-docker/

# COPY build/ /react-docker/build
RUN apk add curl

RUN npm install

RUN npm run build --production
RUN npm install -g serve

# EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
# CMD ["npm", "start"]
