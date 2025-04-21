import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() open = new EventEmitter<void>();
  @Input() buttonText: string = 'Open';
  @Input() bgColor: string = 'gray';

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }

  getIsOpen() {
    return this.isOpen;
  }

  openModal() {
    this.isOpen = true;
    this.open.emit();
  }
}
