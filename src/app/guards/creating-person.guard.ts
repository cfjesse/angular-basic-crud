import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/form-state.service';
import { CreatePersonComponent } from '../pages/create-person/create-person.component';

@Injectable({
  providedIn: 'root'
})
export class CreatingPersonGuard implements CanDeactivate<CreatePersonComponent> {

  constructor(private peopleService: PeopleService) { }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return !this.peopleService.isCreatingPerson;
  }

}
