package com.dev.imageUploader.controller;

import com.dev.imageUploader.model.Image;
import com.dev.imageUploader.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
public class ImageController {

    @Autowired
    private ImageService imageService;


    @CrossOrigin(origins = {"https://localhost:3000/"},methods = {RequestMethod.GET, RequestMethod.POST})
    @PostMapping("/upload")
    public ResponseEntity<?> fileUpload(@RequestParam("file") MultipartFile file) throws Exception {
        Image image = imageService.uploadImage(file);
        return ResponseEntity.ok()
                .body(image);
    }

    @GetMapping( value = "/{id}",produces = {"image/jpeg","image/png"})
    public ResponseEntity<Resource> image(@PathVariable String id) throws IOException {
        ByteArrayResource inputStream = imageService.downloadImage(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .contentLength(inputStream.contentLength())
                .body(inputStream);
    }
}