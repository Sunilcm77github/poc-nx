import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-task-lib',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-lib.component.html',
  styleUrl: './task-lib.component.scss',
})
export class TaskLibComponent {
  tasks: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
