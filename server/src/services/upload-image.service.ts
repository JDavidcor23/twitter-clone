import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadImageService {
  private BUCKET_NAME = this.configService.getOrThrow('AWS_BUCKET_NAME');

  private s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  });

  constructor(private readonly configService: ConfigService) {}

  async uploadFile(fileName: string, file: Buffer) {
    try {
      const newFileName = `${Math.floor(Math.random() * 20)}-${fileName}`;
      const params = {
        Bucket: this.BUCKET_NAME,
        Key: newFileName,
        Body: file,
        ACL: 'public-read',
      };
      const { Location } = await this.s3.upload(params).promise();
      await this.saveImage(Location);
      return Location;
    } catch (error) {
      throw new Error(error);
    }
  }
  async saveImage(url: string) {
    console.log(url);
  }
}
