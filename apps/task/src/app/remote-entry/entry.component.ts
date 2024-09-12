import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskLibComponent } from '@gen1/task-lib';

@Component({
  standalone: true,
  imports: [CommonModule, TaskLibComponent],
  selector: 'app-task-entry',
  template: `<lib-task-lib></lib-task-lib>`,
})
export class RemoteEntryComponent {}
