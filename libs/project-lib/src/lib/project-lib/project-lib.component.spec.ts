import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectLibComponent } from './project-lib.component';

describe('ProjectLibComponent', () => {
  let component: ProjectLibComponent;
  let fixture: ComponentFixture<ProjectLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
