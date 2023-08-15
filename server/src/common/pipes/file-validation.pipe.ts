import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { extname } from 'path';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  private readonly allowedExtensions = ['.jpg', '.jpeg', '.png', '.svg'];
  private readonly maxSizeInBytes = 200 * 1024; // 200KB
  transform(file: Express.Multer.File): Express.Multer.File {
    const fileExt = extname(file.originalname).toLowerCase();
    if (!this.allowedExtensions.includes(fileExt)) {
      throw new BadRequestException('Only files are allowed JPG, PNG, SVG.');
    }
    if (file.size > this.maxSizeInBytes) {
      throw new BadRequestException('The maximum size allowed is 200KB.');
    }
    return file;
  }
}
