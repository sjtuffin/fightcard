import { TestBed } from '@angular/core/testing';
import { FightCardService } from './fightcard.service';
import { HttpClientModule } from '@angular/common/http';

describe('FightCardService', () => {
  let service: FightCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FightCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
