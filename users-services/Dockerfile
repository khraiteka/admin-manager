FROM node:16
WORKDIR /usr/app
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3002
CMD npm start