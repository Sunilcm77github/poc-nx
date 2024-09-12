import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-project-lib',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-lib.component.html',
  styleUrl: './project-lib.component.css',
})
export class ProjectLibComponent {
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
