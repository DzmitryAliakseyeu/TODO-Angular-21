import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormManager {
  tasksTodo: string[] = [];

  addTask(task: string): void {
    if(task){
      this.tasksTodo.push(task);
    }
  }
}
