import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserForm } from '../../../data/users';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
})
export class AddUserFormComponent {
  form: FormGroup;
  @Output() save = new EventEmitter<UserForm>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
      avatarUrl: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.form.patchValue(changes['user'].currentValue);
    }
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit(this.form.value as UserForm);
    }
  }
}
