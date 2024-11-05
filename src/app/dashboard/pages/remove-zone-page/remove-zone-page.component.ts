import { Component } from '@angular/core';
import { InfoBlockComponent } from '@shared/components/info-block/info-block.component';

@Component({
  selector: 'app-remove-zone-page',
  standalone: true,
  imports: [InfoBlockComponent],
  templateUrl: './remove-zone-page.component.html',
  styleUrl: './remove-zone-page.component.scss',
})
export default class RemoveZonePageComponent {}
