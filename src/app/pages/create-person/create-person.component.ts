import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PeopleService } from 'src/app/services/form-state.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent {
  person = { phone: [''] };

  constructor(private router: Router, private peopleService: PeopleService) { }

  onCancelCreate(): void {
    this.router.navigateByUrl('');
  }

}
