import { ListAdminComponent } from '@app/application/features';
import { PrimengModules } from '@shared/constants';
import { Component } from '@angular/core';


@Component({
  selector: 'app-page-admin',
  standalone: true,
  templateUrl: './page-admin.component.html',
  styleUrl: './page-admin.component.scss',
  imports: [ ListAdminComponent, PrimengModules ]
})
export class PageAdminComponent {

}
