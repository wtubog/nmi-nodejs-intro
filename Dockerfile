FROM node:11.6-alpine

WORKDIR ./app

COPY ./package.json ./
RUN npm install
COPY . .

ARG db_name
ARG port
ARG db_host
ARG db_user
ARG db_pass

ENV PORT=$port
ENV DB_HOST=$db_host
ENV DB_NAME=$db_name
ENV DB_USER=$db_user
ENV DB_PASS=$db_pass

CMD ["npm", "run", "start"]