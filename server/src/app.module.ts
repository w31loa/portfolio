import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ResumeModule } from './resume/resume.module';
import { PostModule } from './post/post.module';
import { WorkModule } from './work/work.module';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProfileModule, ResumeModule, PostModule, WorkModule, FileModule, AuthModule, UserModule , PrismaModule],
  providers: [AppService],
})
export class AppModule {}
