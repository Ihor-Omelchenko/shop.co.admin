import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutWrapperComponent } from '@widgets/layout-wrapper';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-layout-wrapper><router-outlet/></app-layout-wrapper>',
  imports: [ RouterOutlet, LayoutWrapperComponent, LayoutWrapperComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
