import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DashboardComponent,
    OrderDetailsComponent,
    UpdateCustomerComponent,
    HierarchyComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MainModule { }
