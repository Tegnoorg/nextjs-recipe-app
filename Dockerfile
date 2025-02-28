FROM node:latest

WORKDIR /usr/local/app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

COPY .next ./.next

CMD [ "npm", "run", "dev"]