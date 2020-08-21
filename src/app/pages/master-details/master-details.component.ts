import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Person, ExpandablePerson } from '../../interfaces/person.interface';
import { Fade } from '../../animations/animations';
import { PeopleService } from 'src/app/services/form-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.scss'],
  animations: [Fade()]
})
export class MasterDetailsComponent implements OnInit, OnDestroy {

  people: ExpandablePerson[] = [];
  subscriptions: Subscription[] = [];
  constructor(private router: Router, private http: HttpClient, private peopleService: PeopleService) { }

  ngOnInit(): void {

    this.subscriptions.push(
      this.peopleService.observePeople().subscribe(people => {
        this.people = people;
      })
    );
  }

  onGoToCreatePage(): void {
    this.router.navigateByUrl('person/create');
  }

  onToggleExpanded(person: ExpandablePerson): void {
    person.expanded = !person.expanded;
  }

  onToggleEdit(person: ExpandablePerson): void {
    person.editing = !person.editing;
  }

  trackByFn(item: Person, index: number): any {
    return item;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
