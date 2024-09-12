import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskLibComponent } from './task-lib.component';

describe('TaskLibComponent', () => {
  let component: TaskLibComponent;
  let fixture: ComponentFixture<TaskLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
