FROM node:11.6-alpine

WORKDIR ./app

COPY ./package.json ./
RUN npm install
COPY . .

# ENV PORT=8080
# ENV DB_HOST=172.17.0.1:27017
# ENV DB_NAME=movies-db
# ENV DB_USER=super_user
# ENV DB_PASS=p@ssw0rd

CMD ["npm", "run", "start"]