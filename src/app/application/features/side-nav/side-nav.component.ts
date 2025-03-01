import { ChangeDetectionStrategy, Component } from '@angular/core';
import { navigation } from '@shared/constants';
import { PanelMenu } from 'primeng/panelmenu';
import { NgClass } from '@angular/common';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  imports: [ Button, PanelMenu, NgClass ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  navList: Array<MenuItem> = navigation;
  menuIsOpen: boolean = false;
}
