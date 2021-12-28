package com.dev.imageUploader.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ImageConversion {

    public String  imageExtension (String name) throws Exception {
        String PATTERN_EXTENSION = "\\.[0-9a-z]+$";
        Pattern rx = Pattern.compile(PATTERN_EXTENSION);
        Matcher matcher = rx.matcher(name);
        String extension = matcher.find() ? matcher.group(0) : null ;
        if(extension == null) throw new Exception("No se encontró extension del archivo");
        return extension;
    }
}