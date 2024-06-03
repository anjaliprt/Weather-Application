FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
VOLUME /tmp
COPY /target/weather-app.jar weather-app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","weather-app.jar"]