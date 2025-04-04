import { CardLoginComponent } from '@app/application/features';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ CardLoginComponent ]
})
export class LoginComponent {

}
