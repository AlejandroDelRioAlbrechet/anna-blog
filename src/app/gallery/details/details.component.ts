import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GalleryPost } from '../galleryPost';
import { Subscription } from 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private galeryPosts: GalleryPost[];
  private subscription: Subscription;
  private currentIndex:number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private domElement: ElementRef) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.galeryPosts = this.groupGalleryElements(
        this.route.snapshot.data['galleryPosts'], 
        params['date']
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private groupGalleryElements(galeryPosts: GalleryPost[], date: string): GalleryPost[] {
    let grouppedByDate = _.groupBy(galeryPosts, (galleryPost: GalleryPost) => {
      return galleryPost.date;
    });
    return grouppedByDate[date];
  }

  private moveNext(): void {
    if (this.currentIndex !== this.galeryPosts.length -1) {
      this.currentIndex += 1;
      this.moveToImage();
    }
  }

  private movePrev(): void {
    if (this.currentIndex !== 0) {
      this.currentIndex -= 1;
      this.moveToImage();
    }
  }

  private moveToImage(): void {
    let leftPosition = _.reduce(this.domElement.nativeElement
      .children[0]
      .children[1]
      .children[1]
      .children, (res:number, image:any, i) => {
        if (i < this.currentIndex) {
          res += image.getBoundingClientRect().width;
        }
        return res;
      }, 0);
    this.animate(leftPosition);
  }

  private animate(scrollTo:number): void {
    const container = this.domElement.nativeElement
      .children[0]
      .children[1]
      .children[1],
      scrollPosition = container.scrollLeft;
      
    this.move(scrollTo, scrollPosition, scrollTo - scrollPosition > 0);
  }

  private move(scrollTo:number, scrollPosition:number, isForward:boolean): void {
    const step = 3,
      time = 3,
      container = this.domElement.nativeElement
        .children[0]
        .children[1]
        .children[1];
    let tempPosition = scrollPosition + (isForward ? step * 1 : step * -1);
    container.scrollLeft = tempPosition;
    setTimeout(() => {
      if (isForward && scrollPosition < scrollTo) {
        this.move(scrollTo, tempPosition, isForward);
      } else if (!isForward && scrollPosition > scrollTo) {
        this.move(scrollTo, tempPosition, isForward);
      }
    }, time);
  }
}
