import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/form-state.service';
import { ModalService } from '../services/modal.service';
import { CreatePersonComponent } from '../pages/create-person/create-person.component';

@Injectable({
  providedIn: 'root'
})
export class CreatingPersonGuard implements CanDeactivate<CreatePersonComponent> {

  constructor(private peopleService: PeopleService, private modalService: ModalService) { }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.peopleService.isCreatingPerson) {
        console.log(`**************** creating person`);
        return this.modalService.openWarningModal();

      } else {
        return true;
      }
  }

}
