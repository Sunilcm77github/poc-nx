import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLibComponent } from '@gen1/project-lib';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ProjectLibComponent, RouterOutlet],
  selector: 'app-project-entry',
  template: `<lib-project-lib></lib-project-lib>`,
})
export class RemoteEntryComponent {}
