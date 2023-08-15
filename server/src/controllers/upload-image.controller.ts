import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageService } from '../services/upload-image.service';
import { FileValidationPipe } from '../common/pipes/file-validation.pipe';

@Controller('upload')
export class UploadImageController {
  constructor(private readonly uploadImageService: UploadImageService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(new FileValidationPipe()) file: Express.Multer.File,
  ) {
    return this.uploadImageService.uploadFile(file.originalname, file.buffer);
  }
}
