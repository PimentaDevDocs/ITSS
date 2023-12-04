package com.pimentadesenvolvimento.gerenciadordetarefas.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info().title("Gerenciador de Tarefas API").version("v1").description("REST API Test"))
                .externalDocs(new ExternalDocumentation()
                        .description("Link para API")
                        .url("http://localhost:8080/api/tarefas"));
    }

}
