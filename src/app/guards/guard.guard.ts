import { Router} from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { take, tap } from "rxjs";

export const guardGuard= () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.userState$.pipe(
    take(1),
    tap((isLoggedIn) => ( !! isLoggedIn ? router.navigate(['/inicio-sesion']) : true)))
};
