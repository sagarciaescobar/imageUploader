FROM adoptopenjdk/openjdk11:latest
ADD ./target/image-uploader.jar image-uploader.jar
RUN mkdir -p /storage
CMD [ "sh", "-c", "java -Xmx300m -Xss512k -XX:CICompilerCount=2 -Dfile.encoding=UTF-8 -XX:+UseContainerSupport -Dserver.port=$PORT -Djava.security.egd=file:/dev/./urandom -jar image-uploader.jar"]
