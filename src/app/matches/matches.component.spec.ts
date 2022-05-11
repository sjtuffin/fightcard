import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchesComponent } from './matches.component';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    component.matches = [
      {
        time: '19:00',
        image: 'match1.png',
        fighters: [
          {
            name: 'MAGOMEDRASUL',
            surname: 'MAJIDOV',
          },
          {
            name: 'TOM',
            surname: 'LITTLE',
          },
        ],
      },
      {
        time: '20:07',
        image: 'match2.png',
        fighters: [
          {
            name: 'FILIP',
            surname: 'HRGOVIĆ',
          },
          {
            name: 'ERIC',
            surname: 'MOLINA',
          },
        ],
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render as many tabs as matches within tablist', async () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('[role="tablist"] li').length).toBe(2);
  });

  it('should update selectedTab on interaction of tab button', async () => {
    const compiled = fixture.debugElement.nativeElement;
    const tabs = compiled.querySelectorAll('.matches_button_time');
    tabs[1].click();
    expect(component.selectedTab?.image).toBe('match2.png');
  });
});
