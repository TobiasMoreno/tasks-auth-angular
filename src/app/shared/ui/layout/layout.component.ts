import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthStateService } from '../../data-access/auth-state.service';
import HeaderComponent from '../../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export default class LayoutComponent {
  private _authState = inject(AuthStateService);
  private _router = inject(Router);
  async logOut() {
    await this._authState.logOut();
    await this._router.navigateByUrl('auth/sign-up');
  }
}
