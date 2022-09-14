import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private crisisService: CrisisService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Crisis> | Observable<never> {
    const id = route.paramMap.get('id')!;

    return this.crisisService.getCrisis(Number(id)).pipe(
      mergeMap((crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
