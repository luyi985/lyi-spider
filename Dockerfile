FROM 'node:8.5.0-alpine'
RUN mkdir /app
RUN cd /app
WORKDIR /app
COPY ./src .
COPY ./run.sh .
RUN chmod u+x ./run.sh
CMD /bin/sh ./run.sh