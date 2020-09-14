import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboarComponent } from './components/product-dashboar/product-dashboar.component';


const routes: Routes = [
 { path: '', component: ProductDashboarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
