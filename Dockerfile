FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY /target/*.jar weather-app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/weather-app.jar"]