import { PrimengModules } from '@shared/constants';
import { Component } from '@angular/core';
import { ChartBarComponent, ChartPie2Component, ChartPieComponent } from '@app/application/features';

@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss',
  imports: [PrimengModules, ChartPieComponent, ChartBarComponent, ChartPie2Component]
})
export class PageDashboardComponent {

}
