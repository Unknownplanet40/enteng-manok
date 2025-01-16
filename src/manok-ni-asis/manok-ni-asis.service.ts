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

    async readData(): Promise<Lorenzo[]> {
        return this.studentRepository.find();
    }

    async readDataByID(id: number): Promise<Lorenzo> {
        const returnData = await this.studentRepository.findOneBy({ id });
        if (!returnData) {
            throw new NotFoundException(`ID ${id} not found`);
        }
        return returnData;
    }
}
