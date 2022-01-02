package com.dev.imageUploader.service;

import com.dev.imageUploader.model.Image;
import com.dev.imageUploader.repository.IImageRepository;
import com.dev.imageUploader.util.ImageConversion;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Stream;

@Service
@Log4j
public class ImageService {

    @Autowired
    private IImageRepository imageRepository;
    private final ImageConversion imageConversion = new ImageConversion();

    public Image uploadImage(MultipartFile file) throws Exception {
        log.info("Cargando imagen");
        String fileExtension = imageConversion.imageExtension(file.getOriginalFilename());
        Stream<Path> storage = Files.list(Path.of("./storage"));
        if(storage.count()>15){
            List<Image> images = imageRepository.findAll();
            for (Image image: images) {
                Files.deleteIfExists(Paths.get("./storage/uploaded_"+ image.getFileId()+ fileExtension));
                imageRepository.deleteAll();
            }
        }
        Image image = new Image( file.getOriginalFilename(),file.getContentType());
        Image imageSave = imageRepository.save(image);
        String FILE_DIRECTORY = "./storage/uploaded_";
        Path path = Paths.get(FILE_DIRECTORY + imageSave.getFileId() + fileExtension);
        byte[] data = file.getBytes();
        Files.write(path,data);
        image.setFileUrl(path.toString());
        image.setFileId(imageSave.getFileId());
        Image image1 = imageRepository.save(image);
        return image1;
    }

    public ByteArrayResource downloadImage(String id) throws IOException {
        log.info("descargando imagen");
        Image image = imageRepository.getById(id);
        return new ByteArrayResource(Files.readAllBytes(Paths.get(image.getFileUrl())));
    }
}
