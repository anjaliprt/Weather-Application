FROM eclipse-temurin:17-jdk-alpine

COPY target/weather-app.jar weather-app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","weather-app.jar"]