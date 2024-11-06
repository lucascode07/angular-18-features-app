import { Component, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { InfoBlockComponent } from '@shared/components/info-block/info-block.component';
import {
  APP_CONFIG_CODE,
  APP_CONFIG_CODE_IMPORT,
} from '../../utils/constants/remove-zone-page.constants';

@Component({
  selector: 'app-remove-zone-page',
  standalone: true,
  imports: [InfoBlockComponent, Highlight],
  templateUrl: './remove-zone-page.component.html',
  styleUrl: './remove-zone-page.component.scss',
})
export default class RemoveZonePageComponent {
  public appConfigCode = signal({ APP_CONFIG_CODE, APP_CONFIG_CODE_IMPORT });
}
