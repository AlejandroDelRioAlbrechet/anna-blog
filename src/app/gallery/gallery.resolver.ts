import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { GalleryService } from './gallery.service';
import { GalleryPost } from './galleryPost';

@Injectable()
export class GalleryResolver implements Resolve<GalleryPost[]> {

  constructor(private galleryService: GalleryService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GalleryPost[]> {
    return this.galleryService.getGalleryPosts();
  }

}
