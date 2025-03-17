import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutWrapperComponent } from '@widgets/layout-wrapper';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<p-toast/><app-layout-wrapper><router-outlet/></app-layout-wrapper>',
  imports: [ RouterOutlet, LayoutWrapperComponent, LayoutWrapperComponent, Toast ],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
