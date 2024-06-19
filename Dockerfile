FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 5000

CMD npm start
