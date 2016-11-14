import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GalleryPost} from './galleryPost';
import * as _ from 'lodash';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  private galeryPosts: Array<GalleryPost[]>;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.galeryPosts = this.groupGalleryElements(this.route.snapshot.data['galleryPosts']);
  }

  private groupGalleryElements(galeryPosts: GalleryPost[]): Array<GalleryPost[]> {
    let grouppedByDate = _.groupBy(galeryPosts, (galleryPost: GalleryPost) => {
      return galleryPost.date;
    });

    return _.toArray(grouppedByDate);
  }

}
