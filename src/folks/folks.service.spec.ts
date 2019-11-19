import { Test, TestingModule } from '@nestjs/testing';
import { FolksService } from './folks.service';

describe('FolksService', () => {
  let service: FolksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FolksService],
    }).compile();

    service = module.get<FolksService>(FolksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
