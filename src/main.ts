import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.use(helmet);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Agenda de Contacts API')
    .setDescription('API pour la gestion des contacts')
    .setVersion('1.0')
    .addBearerAuth()  // Ajout d'authentification Bearer pour les endpoints protégés
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // Le point d'accès sera /api

  await app.listen(3000);
}
bootstrap();
