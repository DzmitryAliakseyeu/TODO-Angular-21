import { Component, computed, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormManager } from '../../../services/formManager/form-manager';
import { FirstCapitalLetterPipe } from '../../../pipes/firstCapitalLetter/first-capital-letter-pipe';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, FirstCapitalLetterPipe],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  private formManager = inject(FormManager);

  protected tasks = computed(() => this.formManager.tasksTodo());
  tasksForm = new FormGroup({
    task: new FormControl(''),
  });

  protected addTask(): void {
    const task = this.tasksForm.get('task')?.value;
    if (task) {
      this.formManager.addTask(task);
      this.tasksForm.reset();
    }
  }

  protected removeTask(id: string):void {
    this.formManager.removeTask(id)
  }

  protected completeTask(id: string):void {
    this.formManager.completeTask(id)
  }
}
