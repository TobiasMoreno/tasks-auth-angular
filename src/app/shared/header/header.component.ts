import { Component, inject } from '@angular/core';
import { AuthStateService } from '../data-access/auth-state.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export default class HeaderComponent {
  private _authState = inject(AuthStateService);
  private _router = inject(Router);
  async logOut() {
    await this._authState.logOut();
    await this._router.navigateByUrl('auth/sign-up');
  }
}
