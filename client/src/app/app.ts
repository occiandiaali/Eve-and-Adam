import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CustomSidenavComponent, MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, RouterOutlet],
  templateUrl: './app.ng.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'adam & eve';
  collapsed = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '240px')
}
