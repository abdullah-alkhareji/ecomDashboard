import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  @Input() title: string = '';
  @Input() value: number | string | undefined | null = null;
}
