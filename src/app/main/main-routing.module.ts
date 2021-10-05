import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "hierarchy",
    component:HierarchyComponent
  },
  {
    path: "hierarchy",
    component:HierarchyComponent
  },
  {
    path: "order-details-list",
    component: OrderDetailsComponent
  },
  {
    path: "update-user",
    component: UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
