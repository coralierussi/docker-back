FROM node:20-alpine
WORKDIR /app
COPY ./package.json .
RUN npm i
COPY . .

EXPOSE 3000
CMD ["node",  "dist/index.js", "3000"]