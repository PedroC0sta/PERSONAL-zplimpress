FROM node:16.17.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
EXPOSE 3006
RUN npm install
COPY . /usr/src/app/
ENTRYPOINT ["npm", "start"]