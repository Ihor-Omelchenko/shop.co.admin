import { TableAdminsComponent } from '@app/application/features';
import { Component } from '@angular/core';
import { Card } from 'primeng/card';


@Component({
  selector: 'app-admin-list',
  standalone: true,
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.scss',
  imports: [ TableAdminsComponent, Card ]
})
export class AdminListComponent {

}
