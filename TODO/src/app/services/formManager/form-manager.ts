import { Injectable, signal } from '@angular/core';
import { Task } from './form-manager.model';

@Injectable({
  providedIn: 'root',
})
export class FormManager {
  public tasksTodo = signal<Task[] | null>(null);

  public addTask(task: string): void {
    if(task){
      const taskDescription = {text:  task, id: crypto.randomUUID()}
      this.tasksTodo.update((tasks: Task[] | null) => [...(tasks || []), taskDescription]);
    }
  }

  public removeTask(id: string){
    console.log(id)
    this.tasksTodo.update((tasks)=> tasks ? tasks.filter((task) => task.id !== id ) : null)
  }
}
