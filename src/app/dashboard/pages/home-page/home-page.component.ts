import { Component, computed, signal } from '@angular/core';

import { InfoCardComponent } from '../../components/info-card/info-card.component';
import { InfoCard } from '../../interfaces/info-card.interface';
import { HOME_INFO_CARDS } from '../../utils/constants/home-info-cards.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [InfoCardComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export default class HomePageComponent {
  public infoCards = signal<InfoCard[]>(HOME_INFO_CARDS);
}
