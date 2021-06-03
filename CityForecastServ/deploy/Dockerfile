FROM openjdk:8

RUN mkdir /opt/forecast-app -p
COPY files /opt/forecast-app

RUN chmod +x /opt/forecast-app/forecast-app.jar

WORKDIR /opt/forecast-app
ENTRYPOINT ["java", "-jar", "forecast-app.jar"]
