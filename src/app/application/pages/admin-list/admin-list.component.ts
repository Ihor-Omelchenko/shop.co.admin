import { TableAdminsComponent } from '@app/application/features';
import { Component } from '@angular/core';


@Component({
  selector: 'app-admin-list',
  standalone: true,
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.scss',
  imports: [ TableAdminsComponent ]
})
export class AdminListComponent {

}
