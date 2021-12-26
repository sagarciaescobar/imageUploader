package com.dev.imageUploader.service;

import com.dev.imageUploader.model.Image;
import com.dev.imageUploader.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ImageService {

    @Autowired
    private IImageRepository imageRepository;

    private final String FILE_DIRECTORY= "./storage/uploaded_";

    public void uploadImage(MultipartFile file){

        try {
            byte[] data = file.getBytes();
            Path path = Paths.get(FILE_DIRECTORY + file.getOriginalFilename());
            Files.write(path,data);
            Image image = new Image( file.getOriginalFilename(),file.getContentType(),path.toString());
            imageRepository.save(image);
        }
        catch (IOException e){
            e.printStackTrace();
        }
    };

    public ByteArrayResource downloadImage(String id) throws IOException {
        Image image = imageRepository.getById(id);
        ByteArrayResource inputStream = new ByteArrayResource(Files.readAllBytes(Paths.get(image.getFileUrl())));
        return inputStream;
    }
}
