import { Module } from '@nestjs/common';
import { ManokNiAsisService } from './manok-ni-asis.service';
import { ManokNiAsisController } from './manok-ni-asis.controller';
import { Lorenzo } from './manok-ni-asis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lorenzo])],
  providers: [ManokNiAsisService],
  controllers: [ManokNiAsisController]
})
export class ManokNiAsisModule {}
