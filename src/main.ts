import { NestFactory } from '@nestjs/core';
import { CitiesModule } from 'src/cities/cities.module';
import { ValidationPipe, Module } from '@nestjs/common';

//setting up the main application with the single module - cities Module
async function bootstrap() {
  const app = await NestFactory.create(CitiesModule);

  // using gloal pipes for validateion
  app.useGlobalPipes(new ValidationPipe());

  // enabling cors
  app.enableCors();

  // listening on port 3001
  await app.listen(process.env.PORT || 3001);
}

// booting / starting the boostraping function to run the server
bootstrap();
