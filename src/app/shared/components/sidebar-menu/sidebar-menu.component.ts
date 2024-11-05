import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarLink } from '@shared/interfaces/sidebar-links.interface';
import { SIDEBAR_LINKS } from '@shared/utils/constants/sidebar-links.constants';

@Component({
  selector: 'sidebar-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  public linksList = signal<SidebarLink[]>(SIDEBAR_LINKS);
}
