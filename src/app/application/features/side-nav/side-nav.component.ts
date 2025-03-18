import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimengModules } from '@shared/constants';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  imports: [ PrimengModules, RouterLink, RouterLinkActive, PrimengModules ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
}
