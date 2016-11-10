import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NewsPost } from './newsPost';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  private newsPosts: NewsPost[];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.newsPosts = this.route.snapshot.data['news'];
  }

}
