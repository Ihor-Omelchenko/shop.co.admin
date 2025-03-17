import { ChangeDetectionStrategy, Component } from '@angular/core';
import { navigation, PrimengModules } from '@shared/constants';
import { NgClass } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  imports: [ NgClass, PrimengModules ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  navList: Array<MenuItem> = navigation;
  menuIsOpen: boolean = false;
}
