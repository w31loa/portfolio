import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileService } from 'src/file/file.service';

@Injectable()
export class PostService {

  constructor(private readonly prisma:PrismaService , private readonly file:FileService){}

  async create(createPostDto: CreatePostDto , image) {



    const img = await this.file.createFile(image ,`${createPostDto.userId}`, 'post', createPostDto.title)
    return await this.prisma.post.create({
      data:{
          ...createPostDto,
          img: img
      }
    })
  }

  async findAll(userId:number) {
    return await this.prisma.post.findMany({
      
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  async remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
