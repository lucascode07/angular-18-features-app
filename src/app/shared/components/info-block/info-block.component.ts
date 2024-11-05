import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { InfoBlockType } from '@shared/interfaces/info-block.interface';

@Component({
  selector: 'info-block',
  standalone: true,
  imports: [NgClass],
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.scss',
})
export class InfoBlockComponent {
  public blockTitle = input.required<string>();
  public boxType = input.required<'informative' | 'warning'>();

  public get configClass() {
    switch (this.boxType()) {
      case 'informative':
        return {
          typeClass: InfoBlockType.INFORMATIVE,
          iconClass: 'bx bx-info-circle',
        };
      case 'warning':
        return {
          typeClass: InfoBlockType.WARNING,
          iconClass: 'bx bx-error',
        };
      default:
        return {
          typeClass: InfoBlockType.INFORMATIVE,
          iconClass: 'bx bx-info-circle',
        };
    }
  }
}
