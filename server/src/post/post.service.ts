import { Injectable } from '@nestjs/common';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { db } from '../firebase.config';

@Injectable()
export class PostService {
  async create(createPostDto: CreatePostDto) {
    await addDoc(collection(db, 'post'), {
      ...createPostDto,
    });
    const querySnapshot = await getDocs(collection(db, 'post'));
    const allData = querySnapshot.docs.map((doc) => doc.data());

    return allData;
  }

  async findAll() {
    const querySnapshot = await getDocs(collection(db, 'post'));
    const allData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        data: doc.data(),
      };
    });
    return allData;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
