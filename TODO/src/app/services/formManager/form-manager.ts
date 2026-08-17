import { Injectable, signal } from '@angular/core';
import { Task } from './form-manager.model';

@Injectable({
  providedIn: 'root',
})
export class FormManager {
  tasksTodo = signal<Task[] | null>(null);

  addTask(task: string): void {
    if(task){
      const taskDescription = {text:  task, id: this.tasksTodo.length}
      this.tasksTodo.update((tasks: Task[] | null) => [...(tasks || []), taskDescription]);
    }
  }
}
