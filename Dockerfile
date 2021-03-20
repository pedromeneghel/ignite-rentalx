FROM node:14-alpine AS dev

CMD cd "/application" && \
  yarn && \
  yarn dev
