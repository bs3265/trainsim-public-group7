#!/bin/sh 

cd trainsim-client
mvn package
cd ..
mvn clean install
docker-compose up
