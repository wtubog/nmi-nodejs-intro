FROM node:11.6-alpine

WORKDIR ./app

COPY ./package.json ./
RUN npm install
COPY . .

ENV PORT=8000
ENV DB_CON=mongodb://host.docker.internal/movies_db

CMD ["npm", "run", "start"]