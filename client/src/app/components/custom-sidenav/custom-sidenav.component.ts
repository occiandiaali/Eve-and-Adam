import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

type MenuItem = {
  icon: string;
  label: string;
  route?: string
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'list',
      label: 'All',
      route: 'all'
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'person',
      label: 'Profile',
      route: 'profile'
    },
    {
      icon: 'room',
      label: 'Room',
      route: 'room'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'video_library',
      label: 'Library',
      route: 'library'
    },
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
