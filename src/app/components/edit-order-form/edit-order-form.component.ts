import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Order } from '../../../data/orders';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-edit-order-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-order-form.component.html',
  styleUrl: './edit-order-form.component.css',
})
export class EditOrderFormComponent implements OnInit, OnChanges {
  @Input() order: Order | null = null;
  @Output() save = new EventEmitter<{ id: number; order: Order }>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      totalPrice: [0, [Validators.required, Validators.min(0)]],
      status: ['', Validators.required],
      orderDate: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      trackingNumber: [''],
    });
  }

  ngOnInit() {
    if (this.order) {
      this.form.patchValue(this.order);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['order'] && changes['order'].currentValue) {
      this.form.patchValue(changes['order'].currentValue);
    }
  }

  onSave() {
    if (this.form.valid && this.order) {
      // Preserve the products array from the original order
      const updatedOrder: Order = {
        ...this.order,
        ...this.form.value,
      };

      this.save.emit({
        id: this.order?.id ?? 0,
        order: updatedOrder,
      });
    }
  }
}
