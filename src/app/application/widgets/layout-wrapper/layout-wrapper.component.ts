import { SideNavComponent } from '@app/application/features';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss',
  imports: [ SideNavComponent ]
})
export class LayoutWrapperComponent {

}
