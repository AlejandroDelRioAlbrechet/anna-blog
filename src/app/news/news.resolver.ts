import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { NewsService } from './news.service';
import { NewsPost } from './newsPost';

@Injectable()
export class NewsResolver implements Resolve<NewsPost[]> {

  constructor(private newsService:NewsService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<NewsPost[]> {
    return this.newsService.getNews();
  }

}