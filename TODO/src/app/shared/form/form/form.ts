import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  tasksForm = new FormGroup({
    task: new FormControl(''),
  });
}
