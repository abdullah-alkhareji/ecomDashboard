import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { User, UserForm } from '../../../data/users';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-edit-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.css',
})
export class EditUserFormComponent implements OnInit, OnChanges {
  @Input() user: User | null = null;
  @Output() save = new EventEmitter<{ id: number; user: UserForm }>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
      avatarUrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && changes['user'].currentValue) {
      this.form.patchValue(changes['user'].currentValue);
    }
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit({
        id: this.user?.id ?? 0,
        user: this.form.value as UserForm,
      });
    }
  }
}
