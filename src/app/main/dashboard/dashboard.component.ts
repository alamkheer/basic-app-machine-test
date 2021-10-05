import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DashboardData } from './dto/dashboard-data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  dashboardData: Array<DashboardData['data']> = [];
  constructor() {
    this.dashboardData = this.dataRowSplitter(new DashboardData().data);
  }

  ngOnInit(): void {}

  dataRowSplitter(arrayList: DashboardData['data']) {
    let data: Array<DashboardData['data']> = [],
      tempholder: DashboardData['data'] = [];
    arrayList.forEach((elem, index) => {
      tempholder.push(elem);
      if ((index + 1) % 3 === 0) {
        data.push(tempholder);
        tempholder = [];
      }
    });
    return data;
  }
}
