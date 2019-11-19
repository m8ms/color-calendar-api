import { Test, TestingModule } from '@nestjs/testing';
import { FolksController } from './folks.controller';

describe('Folks Controller', () => {
  let controller: FolksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FolksController],
    }).compile();

    controller = module.get<FolksController>(FolksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
