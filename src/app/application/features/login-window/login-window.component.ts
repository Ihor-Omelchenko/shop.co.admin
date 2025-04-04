import { PrimengModules } from '@shared/constants';
import { LoginCommand } from '@app/data/commands';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-window',
  standalone: true,
  templateUrl: './login-window.component.html',
  styleUrl: './login-window.component.scss',
  imports: [ FormsModule, PrimengModules ],
  providers: [ LoginCommand ]
})
export class LoginWindowComponent {
  private readonly AuthCommand: LoginCommand = inject(LoginCommand);

  adminName: string = '';
  password: string = '';

  login(): void {
    this.AuthCommand.execute(this.adminName, this.password);
  }
}
