FROM 'node:8.5.0-alpine'
RUN mkdir /app
RUN cd /app
WORKDIR /app
COPY ./src .
RUN ls
RUN pwd
RUN npm install -g yarn
RUN yarn
CMD npm start