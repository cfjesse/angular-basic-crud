import { Component, OnInit, Input, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { ExpandablePerson } from 'src/app/interfaces/person.interface';
import { PeopleService } from 'src/app/services/form-state.service';
import { Fade } from 'src/app/animations/animations';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inline-form',
  templateUrl: './inline-form.component.html',
  styleUrls: ['./inline-form.component.scss'],
  animations: [Fade({ enter: '.3s', leave: '.3s' })]
})
export class InlineFormComponent implements AfterViewInit, OnDestroy {

  @Input() person: ExpandablePerson;
  @Input() action = 'save';
  @ViewChild('form') form: NgForm;
  formSubscription: Subscription;
  phoneNumberLimit = 3;

  constructor(private peopleService: PeopleService, private router: Router) { }


  ngAfterViewInit(): void {
    if (this.action === 'create') {
      this.formSubscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe(() => {
        if (this.form.dirty) {
          this.peopleService.setCreatingPerson(true);
        }
      });
    }
  }

  onSubmitForm(): void {
    if (this.action === 'save') {
      this.peopleService.updatePerson(this.person);
    } else if (this.action === 'create') {
      this.peopleService.createPerson(this.person);
      this.router.navigateByUrl('');
    }
  }

  onAddPhone(): void {
    if (this.person.phone.length < this.phoneNumberLimit) {
      this.person.phone.push('');
    }
  }

  onRemovePhone(index): void {
    this.person.phone.splice(index, 1);
  }

  onCancelEdit(person: ExpandablePerson): void {
    this.peopleService.cancelEdit(person);
  }

  trackByFn(item: any, index: number): any {
    return item;
  }

  ngOnDestroy(): void {
    if (this.formSubscription) { this.formSubscription.unsubscribe(); }
  }

}
