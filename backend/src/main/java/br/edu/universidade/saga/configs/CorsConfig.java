package br.edu.universidade.saga.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("https://sds2-max.herokuapp.com", "http://localhost:3000", "https://5ffbb33393ca4ae5ee652e97--gifted-shockley-0e3cc2.netlify.app")
		.allowedMethods("GET","POST","PUT","PATCH","OPTIONS","DELETE","HEAD","TRACE", "CONNECT");
	}
}