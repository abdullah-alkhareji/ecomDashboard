import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product, ProductForm } from '../../../data/products';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-edit-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.css',
})
export class EditProductFormComponent implements OnInit, OnChanges {
  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<{ id: number; product: ProductForm }>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.product) {
      this.form.patchValue(this.product);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && changes['product'].currentValue) {
      this.form.patchValue(changes['product'].currentValue);
    }
  }

  onSave() {
    if (this.form.valid) {
      this.save.emit({
        id: this.product?.id ?? 0,
        product: this.form.value as ProductForm,
      });
    }
  }
}
