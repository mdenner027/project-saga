package br.edu.universidade.saga.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicates;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket swaggerDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(getApiInfo())
				.select()
				.apis(Predicates.not(RequestHandlerSelectors.basePackage("org.springframework.boot")))
				.build();
	}

	private ApiInfo getApiInfo() {
		Contact contact = new Contact("Max Denner", "https://www.linkedin.com/in/max-denner-t-da-silva-a72bb5165/", "maxdenner027@hotmail.com");
		return new ApiInfoBuilder()
				.title("Project-SAGA")
				.description("Sistema Auxiliar Para Gerenciamento de Atendimentos")
				.contact(contact)
				.build();
	}
}
