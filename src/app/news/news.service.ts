import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { NewsPost } from './newsPost';

@Injectable()
export class NewsService {
  private newApiEndPoit = '/assets/anna.news.json';

  constructor(private http: Http) {}

  getNews() : Observable<NewsPost[]> {
    return this.http.get(this.newApiEndPoit)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
