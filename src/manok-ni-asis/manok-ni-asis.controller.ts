import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ManokNiAsisService } from './manok-ni-asis.service';
import { Lorenzo } from './manok-ni-asis.entity';

@Controller('manok-ni-asis')
export class ManokNiAsisController {
    constructor(private readonly ManokSerive: ManokNiAsisService) {}

    @Post()
    async createmanok(@Body() data: Partial<Lorenzo>): Promise<Lorenzo> {
        return this.ManokSerive.createData(data);
    }

    @Get('')
    async readManok(): Promise<Lorenzo[]> {
        return this.ManokSerive.readData();
    }

    @Get(':id')
    async readManokByID(@Param('id') id: number): Promise<Lorenzo> {
        return this.ManokSerive.readDataByID(id);
    }
}
