import { PrimengModules } from '@shared/constants';
import { Component, inject } from '@angular/core';
import { LoginCommand } from '@app/data/commands';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [ FormsModule, PrimengModules ],
  providers: [ LoginCommand ]
})
export class LoginComponent {
  private readonly AuthCommand: LoginCommand = inject(LoginCommand);

  username: string = '';
  password: string = '';

  login(): void {
    this.AuthCommand.execute(this.username, this.password);
  }
}
