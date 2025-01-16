import { Test, TestingModule } from '@nestjs/testing';
import { ManokNiAsisController } from './manok-ni-asis.controller';

describe('ManokNiAsisController', () => {
  let controller: ManokNiAsisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManokNiAsisController],
    }).compile();

    controller = module.get<ManokNiAsisController>(ManokNiAsisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
