package com.dev.imageUploader.exception;

import lombok.extern.log4j.Log4j;
import org.hibernate.PropertyValueException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
@Log4j
public class GlobalExcentionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> allErrors(Exception ex, WebRequest req){
        log.error("Error general ["+ex.getLocalizedMessage()+"]");
        System.out.println(ex);
        return new ResponseEntity<>("Error: " + ex.getCause(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
