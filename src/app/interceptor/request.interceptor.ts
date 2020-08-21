import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { fakeJSON } from '../data/dummy.data';
import { ExpandablePerson } from '../interfaces/person.interface';

@Injectable()
export class PeopleGetInterceptor implements HttpInterceptor {
  json = fakeJSON;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.match(/people/)) {
      return of(new HttpResponse({
        status: 200,
        body: this.json
      }));
    } else if (request.url.match(/update/)) {

      const body = request.body as { person: ExpandablePerson; };
      let personToUpdate: ExpandablePerson = this.json.find(p => p.guid === body.person.guid);

      if (personToUpdate) {
        personToUpdate = body.person;
      }

      return of(new HttpResponse({
        status: 200,
        body: this.json
      }));
    } else if (request.url.match(/create/)) {
      const body = request.body as { person: ExpandablePerson; };
      body.person.guid = 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, (c) => Math.ceil(Math.random() * 9).toString());
      this.json.push(body.person);

      return of(new HttpResponse({
        status: 200,
        body: this.json
      }));
    } else {
      return next.handle(request);
    }
  }
}
