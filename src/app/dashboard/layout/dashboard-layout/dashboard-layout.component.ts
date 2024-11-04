import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from '@shared/components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarMenuComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export default class DashboardLayoutComponent {}
