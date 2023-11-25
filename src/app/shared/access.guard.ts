import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from 'src/app/pages/login/login.service';

export function accessGuard(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);
  const hasPermission = loginService.loggedUser.permissions.some(
    (x: { menuOption: string }) => x.menuOption === state.url.split('/')[1]
  );

  if (loginService.isLoggedIn() && hasPermission) {
    router.createUrlTree([state.url]);
    return true;
  }
  router.createUrlTree(['/home']);
  return false;
}
