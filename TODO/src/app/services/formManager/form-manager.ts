import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormManager {
  tasksTodo = signal<string[] | null>(null);

  addTask(task: string): void {
    if(task){
      this.tasksTodo.update((tasks: string[] | null) => [...(tasks || []), task]);
    }
  }
}
