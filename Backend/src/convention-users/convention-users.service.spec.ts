import { Test, TestingModule } from '@nestjs/testing';
import { ConventionUsersService } from './convention-users.service';

describe('ConventionUsersService', () => {
  let service: ConventionUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConventionUsersService],
    }).compile();

    service = module.get<ConventionUsersService>(ConventionUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
