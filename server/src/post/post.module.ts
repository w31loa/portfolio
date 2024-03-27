import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { FileModule } from 'src/file/file.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [FileModule, PrismaModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
