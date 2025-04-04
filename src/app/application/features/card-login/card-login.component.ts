import { PrimengModules } from '@shared/constants';
import { LoginCommand } from '@app/data/commands';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-login',
  standalone: true,
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.scss',
  imports: [ FormsModule, PrimengModules ],
  providers: [ LoginCommand ]
})
export class CardLoginComponent {
  private readonly AuthCommand: LoginCommand = inject(LoginCommand);

  adminName: string = '';
  password: string = '';

  login(): void {
    this.AuthCommand.execute(this.adminName, this.password);
  }
}
