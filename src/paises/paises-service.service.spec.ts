import { Test, TestingModule } from '@nestjs/testing';
import { PaisesServiceService } from './paises-service.service';

describe('PaisesServiceService', () => {
  let service: PaisesServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaisesServiceService],
    }).compile();

    service = module.get<PaisesServiceService>(PaisesServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
