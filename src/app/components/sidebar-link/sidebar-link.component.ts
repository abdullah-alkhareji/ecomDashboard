import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-sidebar-link',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css',
})
export class SidebarLinkComponent {
  @Input() text: string = '';
  @Input() routerLink: string = '';
  @Input() icon?: IconProp;
}
