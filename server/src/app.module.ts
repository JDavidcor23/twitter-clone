import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { UploadImageController } from './controllers/upload-image.controller';
import { UploadImageService } from './services/upload-image.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [PostController, UploadImageController],
  providers: [PostService, UploadImageService],
})
export class AppModule {}
