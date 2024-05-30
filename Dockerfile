FROM eclipse-temurin:17-jdk-alpine

COPY target/weather-app.jar weather-app.jar
ENTRYPOINT ["java","-jar","/weather-app.jar"]