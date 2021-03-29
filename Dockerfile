FROM node AS dev

WORKDIR /application

COPY package.json ./

RUN yarn

CMD yarn dev
