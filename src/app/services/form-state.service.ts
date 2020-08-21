import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ExpandablePerson } from '../interfaces/person.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class PeopleService {

  people: ExpandablePerson [] = [];
  isCreatingPerson = false;
  private peopleSubject = new BehaviorSubject<ExpandablePerson[]>(this.people);
  constructor(private http: HttpClient) { }
  observePeople(): Observable<ExpandablePerson[]> {


    this.http.get<ExpandablePerson[]>('/people')
    .pipe(
      tap((people) => people.forEach(person => {
        if (!person.expanded) {
          person.expanded = false;
        }
        if (!person.editing) {
          person.editing = false;
        }
      }))
    ).subscribe(people => {

      this.people = people;
      this.peopleSubject.next(people);
    });

    return this.peopleSubject.asObservable();
  }

  get getCreatingPerson(): boolean {
    return this.isCreatingPerson;
  }

  updatePerson(person: ExpandablePerson): void {
    const personToUpdate = this.people.find(p => p.guid === person.guid);
    this.http.post<ExpandablePerson[]>('/update', { person }).subscribe(people => {
      this.people = people;

      if (personToUpdate) { personToUpdate.editing = false; }
      this.peopleSubject.next(this.people);

    }, err => {
      if (personToUpdate) { personToUpdate.editing = false; }
      // should show error message to user
    });
  }

  cancelEdit(person: ExpandablePerson): void {
    const personToUpdate = this.people.find(p => person.guid === p.guid);
    if (personToUpdate) {
      personToUpdate.editing = false;
      this.peopleSubject.next(this.people);
    }
  }

  setCreatingPerson(creating: boolean): void {
    this.isCreatingPerson = true;
  }

  createPerson(person: ExpandablePerson): void {

    this.http.post<ExpandablePerson[]>('/create', { person }).subscribe(people => {

      this.people = people;
      this.peopleSubject.next(this.people);
      this.isCreatingPerson = false;
    }, err => {
      this.isCreatingPerson = false;
    });
  }
}
