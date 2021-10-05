import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DashboardComponent,
    OrderDetailsComponent,
    UpdateCustomerComponent,
    HierarchyComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule
  ]
})
export class MainModule { }
