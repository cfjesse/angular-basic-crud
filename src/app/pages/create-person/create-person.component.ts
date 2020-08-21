import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PeopleService } from 'src/app/services/form-state.service';
import { Fade } from 'src/app/animations/animations';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
  animations: [Fade({ enter: '.3s', leave: '.2s'})]
})
export class CreatePersonComponent {
  person = { phone: [''] };
  showDataLossWarning = false;
  constructor(private router: Router, private peopleService: PeopleService) { }

  onContinue(value: boolean): void {
    if (value) {
      this.peopleService.setCreatingPerson(false);
      this.router.navigateByUrl('');
    } else {
      this.showDataLossWarning = false;
    }
  }

  onCancelCreate(): void {

    if (this.peopleService.isCreatingPerson) {
      this.showDataLossWarning = true;
    } else {
      this.router.navigateByUrl('');
    }
  }



}
