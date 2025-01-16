import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lorenzo } from './manok-ni-asis.entity';

@Injectable()
export class ManokNiAsisService {
    constructor(
        @InjectRepository(Lorenzo)
        private readonly studentRepository: Repository<Lorenzo>,
    ) {}

    async createData(data: Partial<Lorenzo>): Promise<Lorenzo> {
        const NewData = this.studentRepository.create(data);
        return this.studentRepository.save(data);
    }
}
