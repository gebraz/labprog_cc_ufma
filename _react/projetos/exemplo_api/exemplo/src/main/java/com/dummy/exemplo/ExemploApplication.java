package com.dummy.exemplo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ExemploApplication  implements WebMvcConfigurer {
 
	@Override
  	public void addCorsMappings(CorsRegistry cors) {
    	cors.addMapping("/**")
        	.allowedMethods("GET", "PUT", "DELETE", "POST", "OPTIONS");
  }

	public static void main(String[] args) {
		SpringApplication.run(ExemploApplication.class, args);
	}

}
