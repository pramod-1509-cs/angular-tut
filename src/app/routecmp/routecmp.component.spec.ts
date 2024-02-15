import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutecmpComponent } from './routecmp.component';

describe('RoutecmpComponent', () => {
  let component: RoutecmpComponent;
  let fixture: ComponentFixture<RoutecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutecmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
