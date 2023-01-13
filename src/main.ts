import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // const config = new DocumentBuilder()
  //   .setTitle('dApp Betting')
  //   .setDescription('Documentation REST API')
  //   .setVersion('0.0.1')
  //   .build()

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap();
