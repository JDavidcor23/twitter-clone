import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a post', async () => {
      const createPostDto: CreatePostDto = {
        username: 'testuser',
        name: 'testster',
        description: 'test description',
        hasImage:
          'https://www.alertdriving.co.nz/uploads/1/4/8/0/14809288/280482679.jpg',
        timestamp: Date.now(),
      };
      const initialResult = await service.findAll();
      await controller.create(createPostDto);
      const finalResult = await service.findAll();

      expect(finalResult.length).toBe(initialResult.length + 1);
    });
  });

  describe('findAll', () => {
    it('should return an array of posts', async () => {
      const result = await service.findAll();
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
