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
import { ProductForm } from '../../../data/products';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css',
})
export class AddProductFormComponent {
  form: FormGroup;
  @Output() save = new EventEmitter<ProductForm>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      stock: [0, Validators.required],
      status: ['', Validators.required],
      rating: [0, Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      this.form.patchValue(changes['product'].currentValue);
    }
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit(this.form.value as ProductForm);
    }
  }
}
