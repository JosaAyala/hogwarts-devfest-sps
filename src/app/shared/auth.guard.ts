import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from 'src/app/pages/login/login.service';

export function authenticationGuard(): CanActivateFn {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);
  return () => {
    if (loginService.isLoggedIn()) {
      router.createUrlTree(['/home']);
      return true;
    } else {
      router.createUrlTree(['/login']);
      return false;
    }
  };
}
