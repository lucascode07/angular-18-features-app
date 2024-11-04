import { Component, computed, HostBinding, input } from '@angular/core';
import { InfoCard } from '../../interfaces/info-card.interface';

@Component({
  selector: 'info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  public cardInfo = input.required<InfoCard>();
}
