import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {GalleryPost} from './galleryPost';

@Injectable()
export class GalleryService {
  private newApiEndPoit = '/assets/anna.gallery.json';
  constructor(private http: Http) { }

  getGalleryPosts() : Observable<GalleryPost[]> {
    return this.http.get(this.newApiEndPoit)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
