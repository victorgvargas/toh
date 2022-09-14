import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
  }

  ngOnInit(): void {}

  getMessage(): string {
    return 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(): void {
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    };

    this.message = 'Trying to log in...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/admin';

        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
