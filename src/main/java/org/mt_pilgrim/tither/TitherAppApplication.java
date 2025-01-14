package org.mt_pilgrim.tither;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "org.mt_pilgrim.tither")
@EnableJpaRepositories(basePackages = "org.mt_pilgrim.tither.repository")
public class TitherAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TitherAppApplication.class, args);
	}
}