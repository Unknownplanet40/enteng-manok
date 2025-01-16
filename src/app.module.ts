import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManokNiAsisModule } from './manok-ni-asis/manok-ni-asis.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'asis',
      autoLoadEntities: true,
      synchronize: false
    }),
    ManokNiAsisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
