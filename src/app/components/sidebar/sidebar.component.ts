import { Component } from '@angular/core';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faCartShopping,
  faDashboard,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarLinkComponent, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faDashboard = faDashboard;
  faBox = faBox;
  faCartShopping = faCartShopping;
  faUsers = faUsers;
}
