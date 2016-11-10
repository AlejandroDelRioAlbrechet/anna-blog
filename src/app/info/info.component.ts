import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  private workPeriod = 0;

  constructor() {
    let startperiod = new Date('1993-01-01');
    this.workPeriod = new Date().getFullYear() - startperiod.getFullYear();
  }

  ngOnInit() {
  }

}
