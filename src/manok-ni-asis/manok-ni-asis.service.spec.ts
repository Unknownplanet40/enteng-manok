import { Test, TestingModule } from '@nestjs/testing';
import { ManokNiAsisService } from './manok-ni-asis.service';

describe('ManokNiAsisService', () => {
  let service: ManokNiAsisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManokNiAsisService],
    }).compile();

    service = module.get<ManokNiAsisService>(ManokNiAsisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
